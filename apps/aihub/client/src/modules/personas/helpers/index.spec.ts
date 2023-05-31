import { describe, expect, it } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import {
  cleanPersonaOptionsKeys,
  createPersonaChatMessages,
  createPersonaPromptsMessages,
  createPersonaPromptsTemplates,
  createPersonaPromptsTemplatesFromObject,
  personaPrompts,
} from '.';

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
    assertObjectProperties(properties, personaPrompts);
  });

  it('should return the correct answer_size prompt', async () => {
    const response = await personaPrompts.answer_size.format({
      answer_size: 'short',
    });
    const expected = 'Write a short response.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct domain prompt', async () => {
    const response = await personaPrompts.domain.format({
      domain: 'technology',
    });
    const expected = 'Provide a response from the technology domain.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct informality prompt', async () => {
    const response = await personaPrompts.informality.format({
      informality: 'formal',
    });
    const expected = 'Craft a formal response.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct language_complexity prompt', async () => {
    const response = await personaPrompts.language_complexity.format({
      language_complexity: 'simple',
    });
    const expected = 'Compose a simple response.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct level_of_detail prompt', async () => {
    const response = await personaPrompts.level_of_detail.format({
      level_of_detail: 'summarized',
    });
    const expected = 'Provide a summarized response.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct style prompt', async () => {
    const response = await personaPrompts.style.format({
      style: 'professional',
    });
    const expected = 'Write a response in professional style.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct target_audience prompt', async () => {
    const response = await personaPrompts.target_audience.format({
      target_audience: 'software engineers',
    });
    const expected =
      'Craft a response tailored to the software engineers target audience.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct tone prompt', async () => {
    const response = await personaPrompts.tone.format({
      tone: 'casual',
    });
    const expected = 'Write a response with a casual tone.';

    expect(response.text).toEqual(expected);
  });

  it('should return the correct topic prompt', async () => {
    const response = await personaPrompts.topic.format({
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

    expect(answerSizePrompt).toBe(personaPrompts.answer_size);
    expect(domainPrompt).toBe(personaPrompts.domain);
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

    expect(promptsTemplates).toContain(personaPrompts.answer_size);
    expect(promptsTemplates).toContain(personaPrompts.domain);
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

    expect(promptsTemplates).not.toContain(personaPrompts.informality);
    expect(promptsTemplates).not.toContain(personaPrompts.language_complexity);
    expect(promptsTemplates).not.toContain(personaPrompts.level_of_detail);
    expect(promptsTemplates).not.toContain(personaPrompts.style);
    expect(promptsTemplates).not.toContain(personaPrompts.target_audience);
    expect(promptsTemplates).not.toContain(personaPrompts.tone);
    expect(promptsTemplates).not.toContain(personaPrompts.topic);
  });
});

describe('createPersonaPromptsMessages', () => {
  it('should return an array of the correct size', async () => {
    const messages = await createPersonaPromptsMessages({
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

    expect(messages).toHaveLength(3);
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
    expect(firstMessage.text).toEqual(
      'You are a chatbot and you will receive structions to fine tune your answer.'
    );
  });
});
