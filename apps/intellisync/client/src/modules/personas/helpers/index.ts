import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { SystemChatMessage } from 'langchain/schema';

import { type Message } from 'ai';

import { queryClient } from '@/lib/react-query/client';
import { chatbotsQueryKeys } from '@/modules/chatbots/query-keys';
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

export function cleanPersonaOptionsKeys(personaOptions: PersonaOptions) {
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
  personaOptions: PersonaOptions
) {
  const cleanedKeys = cleanPersonaOptionsKeys(personaOptions);

  const promptsTemplates = createPersonaPromptsTemplates(cleanedKeys);

  return promptsTemplates;
}

export async function createPersonaPromptMessages(
  personaOptions: PersonaOptions
) {
  const promptsTemplates =
    createPersonaPromptsTemplatesFromObject(personaOptions);

  const prompt = ChatPromptTemplate.fromPromptMessages(promptsTemplates);

  const formatedPrompt = await prompt.formatPromptValue(personaOptions);

  const messages: SystemChatMessage[] = formatedPrompt.toChatMessages();

  return messages;
}

export async function createPersonaChatMessages(persona: PersonaOptions) {
  const messages = await createPersonaPromptMessages(persona);
  const messagesIsEmpty = messages.length === 0;
  if (messagesIsEmpty) return [];

  const initialMessage = new SystemChatMessage(
    'You are a chatbot and you will receive structions to fine tune your answer.'
  );

  return [initialMessage, ...messages];
}

export function formatSystemMessages(
  systemMessages: SystemChatMessage[]
): Message[] {
  return systemMessages.map((systemMessage, index) => {
    const { data, type } = systemMessage.toJSON();
    return {
      role: type,
      content: data.content,
      id: index.toString(),
    } as Message;
  });
}

export async function getPersonaInitialMessages(persona: PersonasRow) {
  const { id, chatbot_id, context, created_at, updated_at, ...personaOptions } =
    persona;

  const baseMessages = await createPersonaChatMessages(personaOptions);

  const messages = formatSystemMessages(baseMessages);

  return messages;
}

// export function updatePersonaInitialMessages() {}
