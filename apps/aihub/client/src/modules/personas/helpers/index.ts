import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { SystemChatMessage } from 'langchain/schema';

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

export const personaPrompts = {
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

type PersonaPromptsOptionsKeys = keyof typeof personaPrompts;

export function createPersonaPromptsTemplates(
  personaOptionsKeys: PersonaPromptsOptionsKeys[]
) {
  const prompts = personaOptionsKeys.map((option) => {
    const prompt = personaPrompts[option];
    return prompt;
  });

  return prompts;
}

type PersonaPromptsMessages = Partial<
  Record<PersonaPromptsOptionsKeys, string>
>;

export function createPersonaPromptsTemplatesFromObject(
  personaOptions: PersonaPromptsMessages
) {
  const personaOptionsKeys = Object.keys(
    personaOptions
  ) as PersonaPromptsOptionsKeys[];

  const promptsTemplates = createPersonaPromptsTemplates(personaOptionsKeys);

  return promptsTemplates;
}

export async function createPersonaPromptsMessages(
  personaOptions: PersonaPromptsMessages
) {
  const promptsTemplates =
    createPersonaPromptsTemplatesFromObject(personaOptions);

  const prompt = ChatPromptTemplate.fromPromptMessages(promptsTemplates);

  const formatedPrompt = await prompt.formatPromptValue(personaOptions);

  const messages = formatedPrompt.toChatMessages();

  return messages;
}

export async function createPersonaChatMessages(
  personaOptions: PersonaPromptsMessages
) {
  const messages = await createPersonaPromptsMessages(personaOptions);
  const messagesIsEmpty = messages.length === 0;
  if (messagesIsEmpty) return [];

  const initialMessage = new SystemChatMessage(
    'You are a chatbot and you will receive structions to fine tune your answer.'
  );

  return [initialMessage, ...messages];
}
