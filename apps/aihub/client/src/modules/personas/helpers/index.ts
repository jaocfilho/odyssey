import { SystemMessagePromptTemplate } from 'langchain/prompts';

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

type PersonaPrompts = keyof typeof personaPrompts;

export function getPersonaPrompts(personaOptions: PersonaPrompts[]) {
  const prompts = personaOptions.map((option) => {
    const prompt = personaPrompts[option];
    return prompt;
  });

  return prompts;
}
