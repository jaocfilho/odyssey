import { describe, expect, it } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { addAppPrefix, addGptPrefix, addPrefix } from '.';

describe('addAppPrefix', () => {
  it('should extract and add the "p_app_" prefix to the desired keys', () => {
    const obj = {
      name: 'anyName',
      model: 'anyModel',
      description: 'anyDescription',
      domain: 'anyDomain',
    };

    const result = addAppPrefix(obj);
    const expectedProperties = [
      'p_app_name',
      'p_app_model',
      'p_app_description',
    ];

    assertObjectProperties(expectedProperties, result);
  });

  it('should keep the original value of each key', () => {
    const obj = {
      name: 'anyName',
      model: 'anyModel',
      description: 'anyDescription',
      domain: 'anyDomain',
    };

    const result = addAppPrefix(obj);

    expect(result['p_app_name']).toEqual(obj.name);
    expect(result['p_app_model']).toEqual(obj.model);
    expect(result['p_app_description']).toEqual(obj.description);
  });
});

describe('addGptPrefix', () => {
  it('should extract and add the "p_gpt_" prefix to the desired keys', () => {
    const obj = {
      name: 'anyName',
      model: 'anyModel',
      context: [],
      temperature: 1,
      style: 'anyStyle',
      domain: 'anyDomain',
      target_audience: 'anyTargetAudience',
      topic: 'anyTopic',
      level_of_detail: 'anyLevelOfDetail',
      tone: 'anyTone',
      language_complexity: 'anyLanguageComplexity',
      informality: 'anyInformality',
      answer_size: 'anyAnswerSize',
    };

    const result = addGptPrefix(obj);
    const expectedProperties = [
      'p_gpt_context',
      'p_gpt_temperature',
      'p_gpt_style',
      'p_gpt_domain',
      'p_gpt_target_audience',
      'p_gpt_topic',
      'p_gpt_level_of_detail',
      'p_gpt_tone',
      'p_gpt_language_complexity',
      'p_gpt_informality',
      'p_gpt_answer_size',
    ];

    assertObjectProperties(expectedProperties, result);
  });

  it('should keep the original value of each key', () => {
    const obj = {
      name: 'anyName',
      model: 'anyModel',
      context: [],
      temperature: 1,
      style: 'anyStyle',
      domain: 'anyDomain',
      target_audience: 'anyTargetAudience',
      topic: 'anyTopic',
      level_of_detail: 'anyLevelOfDetail',
      tone: 'anyTone',
      language_complexity: 'anyLanguageComplexity',
      informality: 'anyInformality',
      answer_size: 'anyAnswerSize',
    };

    const result = addGptPrefix(obj);

    expect(result['p_gpt_context']).toEqual(obj.context);
    expect(result['p_gpt_temperature']).toEqual(obj.temperature);
    expect(result['p_gpt_style']).toEqual(obj.style);
    expect(result['p_gpt_domain']).toEqual(obj.domain);
    expect(result['p_gpt_target_audience']).toEqual(obj.target_audience);
    expect(result['p_gpt_topic']).toEqual(obj.topic);
    expect(result['p_gpt_level_of_detail']).toEqual(obj.level_of_detail);
    expect(result['p_gpt_tone']).toEqual(obj.tone);
    expect(result['p_gpt_language_complexity']).toEqual(
      obj.language_complexity
    );
    expect(result['p_gpt_informality']).toEqual(obj.informality);
    expect(result['p_gpt_answer_size']).toEqual(obj.answer_size);
  });
});

describe('addPrefix', () => {
  it('should extract and add the "p_gpt_" prefix to the desired keys', () => {
    const obj = {
      name: 'anyName',
      model: 'anyModel',
      description: 'anyDescription',
      context: [],
      temperature: 1,
      style: 'anyStyle',
      domain: 'anyDomain',
      target_audience: 'anyTargetAudience',
      topic: 'anyTopic',
      level_of_detail: 'anyLevelOfDetail',
      tone: 'anyTone',
      language_complexity: 'anyLanguageComplexity',
      informality: 'anyInformality',
      answer_size: 'anyAnswerSize',
    };

    const result = addPrefix(obj);
    const expectedProperties = [
      'p_app_name',
      'p_app_model',
      'p_app_description',
      'p_gpt_context',
      'p_gpt_temperature',
      'p_gpt_style',
      'p_gpt_domain',
      'p_gpt_target_audience',
      'p_gpt_topic',
      'p_gpt_level_of_detail',
      'p_gpt_tone',
      'p_gpt_language_complexity',
      'p_gpt_informality',
      'p_gpt_answer_size',
    ];

    assertObjectProperties(expectedProperties, result);
  });

  it('should keep the original value of each key', () => {
    const obj = {
      name: 'anyName',
      model: 'anyModel',
      description: 'anyDescription',
      context: [],
      temperature: 1,
      style: 'anyStyle',
      domain: 'anyDomain',
      target_audience: 'anyTargetAudience',
      topic: 'anyTopic',
      level_of_detail: 'anyLevelOfDetail',
      tone: 'anyTone',
      language_complexity: 'anyLanguageComplexity',
      informality: 'anyInformality',
      answer_size: 'anyAnswerSize',
    };

    const result = addPrefix(obj);

    expect(result['p_app_name']).toEqual(obj.name);
    expect(result['p_app_model']).toEqual(obj.model);
    expect(result['p_app_description']).toEqual(obj.description);
    expect(result['p_gpt_context']).toEqual(obj.context);
    expect(result['p_gpt_temperature']).toEqual(obj.temperature);
    expect(result['p_gpt_style']).toEqual(obj.style);
    expect(result['p_gpt_domain']).toEqual(obj.domain);
    expect(result['p_gpt_target_audience']).toEqual(obj.target_audience);
    expect(result['p_gpt_topic']).toEqual(obj.topic);
    expect(result['p_gpt_level_of_detail']).toEqual(obj.level_of_detail);
    expect(result['p_gpt_tone']).toEqual(obj.tone);
    expect(result['p_gpt_language_complexity']).toEqual(
      obj.language_complexity
    );
    expect(result['p_gpt_informality']).toEqual(obj.informality);
    expect(result['p_gpt_answer_size']).toEqual(obj.answer_size);
  });
});
