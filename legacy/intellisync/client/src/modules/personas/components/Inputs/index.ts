import { AnswerSize } from './AnswerSize';
import { Domain } from './Domain';
import { LanguageComplexity } from './LanguageComplexity';
import { LevelOfDetail } from './LevelOfDetail';
import { Style } from './Style';
import { TargetAudience } from './TargetAudience';
import { Tone } from './Tone';
import { Topic } from './Topic';
import { Informality } from './Informality';

export const personaInputs = {
  AnswerSize,
  Domain,
  Informality,
  LanguageComplexity,
  LevelOfDetail,
  Style,
  TargetAudience,
  Tone,
  Topic,
};

export const personaInputsMap = {
  answer_size: AnswerSize,
  domain: Domain,
  informality: Informality,
  language_complexity: LanguageComplexity,
  level_of_detail: LevelOfDetail,
  style: Style,
  target_audience: TargetAudience,
  tone: Tone,
  topic: Topic,
};
