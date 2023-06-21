import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { SystemChatMessage } from 'langchain/schema';

import { queryClient } from '@/lib/react-query/client';
import { chatbotsQueryKeys } from '@/modules/chatbots/query-keys';
import { NullableRecord } from '@odyssey/type-utils';
import { PersonaOptions, PersonasRow, PersonasUpdate } from '../entities';

// prompt helpers will be moved to a future completions module

const domainPrompt = SystemMessagePromptTemplate.fromTemplate(
  'Provide a response from the {domain} domain.'
);

const tonePrompt = SystemMessagePromptTemplate.fromTemplate(
  'Write a response with a {tone} tone.'
);

const levelOfDetailPrompt = SystemMessagePromptTemplate.fromTemplate(
  'Provide a {level_of_detail} response.'
);

const topicPrompt = SystemMessagePromptTemplate.fromTemplate(
  'Write a response related to the {topic} topic.'
);

const informalityPrompt = SystemMessagePromptTemplate.fromTemplate(
  'Craft a {informality} response.'
);

const languageComplexityPrompt = SystemMessagePromptTemplate.fromTemplate(
  'Compose a {language_complexity} response.'
);

const answerSizePrompt = SystemMessagePromptTemplate.fromTemplate(
  'Write a {answer_size} response.'
);

const stylePrompt = SystemMessagePromptTemplate.fromTemplate(
  'Write a response in {style} style.'
);

const targetAudiencePrompt = SystemMessagePromptTemplate.fromTemplate(
  'Craft a response tailored to the {target_audience} target audience.'
);

export type PersonaPromptMessages = Record<
  keyof PersonaOptions,
  SystemMessagePromptTemplate
>;

export const personaPromptMessages: PersonaPromptMessages = {
  answer_size: answerSizePrompt,
  domain: domainPrompt,
  informality: informalityPrompt,
  language_complexity: languageComplexityPrompt,
  level_of_detail: levelOfDetailPrompt,
  style: stylePrompt,
  target_audience: targetAudiencePrompt,
  tone: tonePrompt,
  topic: topicPrompt,
};

type PersonaPromptsOptionsKeys = keyof PersonaOptions;

export function createPersonaPromptsTemplates(
  personaOptionsKeys: PersonaPromptsOptionsKeys[]
) {
  const prompts = personaOptionsKeys.map((option) => {
    const prompt = personaPromptMessages[option];
    return prompt;
  });

  return prompts;
}

export function cleanPersonaOptionsKeys(personaOptions: PersonaPromptMessages) {
  const personaOptionsKeys = Object.keys(
    personaOptions
  ) as PersonaPromptsOptionsKeys[];

  const cleanedKeys = personaOptionsKeys.filter((key) => {
    const value = personaOptions[key];
    if (!!value) return key;
  });

  return cleanedKeys;
}

export function createPersonaPromptsTemplatesFromObject(
  personaOptions: PersonaPromptMessages
) {
  const cleanedKeys = cleanPersonaOptionsKeys(personaOptions);

  const promptsTemplates = createPersonaPromptsTemplates(cleanedKeys);

  return promptsTemplates;
}

export async function createPersonaPromptMessages(
  personaOptions: PersonaPromptMessages
) {
  const promptsTemplates =
    createPersonaPromptsTemplatesFromObject(personaOptions);

  const prompt = ChatPromptTemplate.fromPromptMessages(promptsTemplates);

  const formatedPrompt = await prompt.formatPromptValue(personaOptions);

  const messages = formatedPrompt.toChatMessages();

  return messages;
}

export async function createPersonaChatMessages(
  persona: PersonaPromptMessages
) {
  const messages = await createPersonaPromptMessages(persona);
  const messagesIsEmpty = messages.length === 0;
  if (messagesIsEmpty) return [];

  const initialMessage = new SystemChatMessage(
    'You are a chatbot and you will receive structions to fine tune your answer.'
  );

  return [initialMessage, ...messages];
}

export async function cancelChatbotPersonaQuery(chatbot_id: string) {
  const queryKey = chatbotsQueryKeys.persona(chatbot_id);
  return await queryClient.cancelQueries(queryKey);
}

export function getChatbotPersonaQuery(chatbot_id: string) {
  const queryKey = chatbotsQueryKeys.persona(chatbot_id);
  return queryClient.getQueryData<PersonasRow>(queryKey);
}

export function setChatbotPersonaQuery(
  chatbot_id: string,
  data: PersonasUpdate
) {
  const queryKey = chatbotsQueryKeys.persona(chatbot_id);
  return queryClient.setQueryData<PersonasRow>(queryKey, (old) => {
    if (!!old) {
      return { ...old, ...data };
    }
  });
}
