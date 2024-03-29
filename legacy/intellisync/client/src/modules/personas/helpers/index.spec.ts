import { describe, expect, it } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import {
  cleanPersonaOptionsKeys,
  createPersonaChatMessages,
  createPersonaPromptMessages,
  createPersonaPromptsTemplates,
  createPersonaPromptsTemplatesFromObject,
  personaPromptMessages,
  formatSystemMessages,
  createContextChatMessages,
} from '.';
import {
  FINAL_MESSAGE,
  INITIAL_CONTEXT_MESSAGE,
  INITIAL_MESSAGE,
} from '../constants';

describe('personaPrompts', () => {
  it('should has the correct properties', () => {
    const properties = [
      'answer_size',
      'domain',
      'informality',
      'language_complexity',
      'level_of_detail',
      'style',
      'target_audience',
      'tone',
      'topic',
    ];
    assertObjectProperties(properties, personaPromptMessages);
  });

  it('should return the correct answer_size prompt', async () => {
    const response = await personaPromptMessages.answer_size.format({
      answer_size: 'short',
    });
    const expected = 'Write a short response.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct domain prompt', async () => {
    const response = await personaPromptMessages.domain.format({
      domain: 'technology',
    });
    const expected = 'Provide a response from the technology domain.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct informality prompt', async () => {
    const response = await personaPromptMessages.informality.format({
      informality: 'formal',
    });
    const expected = 'Craft a formal response.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct language_complexity prompt', async () => {
    const response = await personaPromptMessages.language_complexity.format({
      language_complexity: 'simple',
    });
    const expected = 'Compose a simple response.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct level_of_detail prompt', async () => {
    const response = await personaPromptMessages.level_of_detail.format({
      level_of_detail: 'summarized',
    });
    const expected = 'Provide a summarized response.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct style prompt', async () => {
    const response = await personaPromptMessages.style.format({
      style: 'professional',
    });
    const expected = 'Write a response in professional style.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct target_audience prompt', async () => {
    const response = await personaPromptMessages.target_audience.format({
      target_audience: 'software engineers',
    });
    const expected =
      'Craft a response tailored to the software engineers target audience.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct tone prompt', async () => {
    const response = await personaPromptMessages.tone.format({
      tone: 'casual',
    });
    const expected = 'Write a response with a casual tone.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct topic prompt', async () => {
    const response = await personaPromptMessages.topic.format({
      topic: 'software development',
    });
    const expected =
      'Write a response related to the software development topic.';

    expect(response.text).toEqual(expected);
  });
});

describe('createPersonaPromptsTemplates', () => {
  it('should return an array of prompts', () => {
    const [answerSizePrompt, domainPrompt] = createPersonaPromptsTemplates([
      'answer_size',
      'domain',
    ]);

    expect(answerSizePrompt).toBe(personaPromptMessages.answer_size);
    expect(domainPrompt).toBe(personaPromptMessages.domain);
  });
});

describe('cleanPersonaOptionsKeys', () => {
  it('should return an array of keys with the same length as the number of clean keys', () => {
    const cleanedKeys = cleanPersonaOptionsKeys({
      answer_size: 'any',
      domain: 'any',
      informality: 'any',
      language_complexity: 'any',
      level_of_detail: 'any',
      style: 'any',
      target_audience: 'any',
      tone: 'any',
      topic: 'any',
    });

    expect(cleanedKeys).toHaveLength(9);
  });

  it('should remove dirty keys from the resulting array', () => {
    const cleanedKeys = cleanPersonaOptionsKeys({
      answer_size: 'any',
      domain: null,
      informality: null,
      language_complexity: null,
      level_of_detail: null,
      style: null,
      target_audience: null,
      tone: null,
      topic: null,
    });

    expect(cleanedKeys).toHaveLength(1);
  });
});

describe('createPersonaPromptsTemplatesFromObject', () => {
  it('should return an array of prompts matching the keys from the object', () => {
    const promptsTemplates = createPersonaPromptsTemplatesFromObject({
      answer_size: 'short',
      domain: 'technology',
      informality: null,
      language_complexity: null,
      level_of_detail: null,
      style: null,
      target_audience: null,
      tone: null,
      topic: null,
    });

    expect(promptsTemplates).toContain(personaPromptMessages.answer_size);
    expect(promptsTemplates).toContain(personaPromptMessages.domain);
  });

  it('should return an array of the correct size', () => {
    const promptsTemplates = createPersonaPromptsTemplatesFromObject({
      answer_size: 'short',
      domain: 'technology',
      informality: null,
      language_complexity: null,
      level_of_detail: null,
      style: null,
      target_audience: null,
      tone: null,
      topic: null,
    });

    expect(promptsTemplates).toHaveLength(2);
  });

  it('should not match the key if it is null', () => {
    const promptsTemplates = createPersonaPromptsTemplatesFromObject({
      answer_size: 'short',
      domain: 'technology',
      informality: null,
      language_complexity: null,
      level_of_detail: null,
      style: null,
      target_audience: null,
      tone: null,
      topic: null,
    });

    expect(promptsTemplates).not.toContain(personaPromptMessages.informality);
    expect(promptsTemplates).not.toContain(
      personaPromptMessages.language_complexity
    );
    expect(promptsTemplates).not.toContain(
      personaPromptMessages.level_of_detail
    );
    expect(promptsTemplates).not.toContain(personaPromptMessages.style);
    expect(promptsTemplates).not.toContain(
      personaPromptMessages.target_audience
    );
    expect(promptsTemplates).not.toContain(personaPromptMessages.tone);
    expect(promptsTemplates).not.toContain(personaPromptMessages.topic);
  });
});

describe('createPersonaPromptMessages', () => {
  it('should return an array of the correct size', async () => {
    const messages = await createPersonaPromptMessages({
      answer_size: 'short',
      domain: 'technology',
      informality: null,
      language_complexity: null,
      level_of_detail: null,
      style: null,
      target_audience: null,
      tone: null,
      topic: null,
    });

    expect(messages).toHaveLength(2);
  });
});

describe('createPersonaChatMessages', () => {
  it('should return an array of the correct size', async () => {
    const messages = await createPersonaChatMessages({
      answer_size: 'short',
      domain: 'technology',
      informality: null,
      language_complexity: null,
      level_of_detail: null,
      style: null,
      target_audience: null,
      tone: null,
      topic: null,
    });

    expect(messages).toHaveLength(4);
  });

  it('should have the correct first message', async () => {
    const messages = await createPersonaChatMessages({
      answer_size: 'short',
      domain: 'technology',
      informality: null,
      language_complexity: null,
      level_of_detail: null,
      style: null,
      target_audience: null,
      tone: null,
      topic: null,
    });

    const firstMessage = messages[0];
    expect(firstMessage.text).toEqual(INITIAL_MESSAGE);
  });

  it('should have the correct last message', async () => {
    const messages = await createPersonaChatMessages({
      answer_size: 'short',
      domain: 'technology',
      informality: null,
      language_complexity: null,
      level_of_detail: null,
      style: null,
      target_audience: null,
      tone: null,
      topic: null,
    });

    const lastMessage = messages[messages.length - 1];
    expect(lastMessage.text).toEqual(FINAL_MESSAGE);
  });
});

describe('createContextChatMessages', () => {
  it('should return empty if the context is empty', () => {
    const messages = createContextChatMessages([]);
    expect(messages).toHaveLength(0);
  });

  it('should return an array of the correct size', () => {
    const messages = createContextChatMessages(['any']);

    expect(messages).toHaveLength(2);
  });

  it('should have the correct first message', () => {
    const messages = createContextChatMessages(['any']);

    const firstMessage = messages[0];
    expect(firstMessage.text).toEqual(INITIAL_CONTEXT_MESSAGE);
  });

  it('should have the correct prefix', () => {
    const messages = createContextChatMessages(['any']);

    const message = messages[1];
    const expected = message.text.startsWith('CONTEXT: ');

    expect(expected).toBe(true);
  });
});

describe('formatSystemMessages', async () => {
  const systemMessages = await createPersonaChatMessages({
    answer_size: 'short',
    domain: 'technology',
    informality: null,
    language_complexity: null,
    level_of_detail: null,
    style: null,
    target_audience: null,
    tone: null,
    topic: null,
  });

  it('should return an array of the correct size', () => {
    const messages = formatSystemMessages(systemMessages);

    expect(messages).toHaveLength(4);
  });

  it('should format the messages correctly', () => {
    const messages = formatSystemMessages(systemMessages);

    const properties = ['role', 'content', 'id'];
    messages.forEach((message) => {
      assertObjectProperties(properties, message);
    });
  });

  it('should return an array of system messages', () => {
    const messages = formatSystemMessages(systemMessages);

    messages.forEach((message) => {
      expect(message.role).toEqual('system');
    });
  });

  it('should have the correct first message', () => {
    const messages = formatSystemMessages(systemMessages);

    const firstMessage = messages[0];
    expect(firstMessage.content).toEqual(INITIAL_MESSAGE);
  });

  it('should have the correct last message', () => {
    const messages = formatSystemMessages(systemMessages);

    const lastMessage = messages[messages.length - 1];
    expect(lastMessage.content).toEqual(FINAL_MESSAGE);
  });
});
