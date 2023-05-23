import { Form } from '@/modules/forms/components';
import { Inputs } from './Inputs';
import { type UsePersonaFormMethods } from './use-persona-form';

export { usePersonaForm } from './use-persona-form';

type PersonaFormProps = {
  methods: UsePersonaFormMethods;
};

export function PersonaForm({ methods }: PersonaFormProps) {
  return (
    <Form.Root id="personaForm" {...methods}>
      <div className="flex flex-col gap-4">
        <Inputs.Domain />
        <Inputs.TargetAudience />
        <Inputs.Style />
        <Inputs.Temperature />
        <Inputs.Topic />
        <Inputs.LevelOfDetail />
        <Inputs.Tone />
        <Inputs.LanguageComplexity />
        <Inputs.Informality />
        <Inputs.AnswerSize />
      </div>
    </Form.Root>
  );
}
