import { describe, expect, it } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { getPersonaPrompts, personaPrompts } from '.';

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

describe('getPersonaPrompts', () => {
  it('should return an array of prompts', () => {
    const [answerSizePrompt, domainPrompt] = getPersonaPrompts([
      'answer_size',
      'domain',
    ]);

    expect(answerSizePrompt).toBe(personaPrompts.answer_size);
    expect(domainPrompt).toBe(personaPrompts.domain);
  });
});
