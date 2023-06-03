import { Form } from '@/modules/forms/components';
import { Inputs } from './Inputs';
import { type UsePersonaFormMethods } from './use-persona-form';
import { PersonaFormData } from './Inputs/schema';
export { type PersonaFormData } from './Inputs/schema';
export { usePersonaForm } from './use-persona-form';

type PersonaFormProps = {
  id: string;
  onSubmit: (data: PersonaFormData) => void;
  methods: UsePersonaFormMethods;
};

export function PersonaForm({ id, onSubmit, methods }: PersonaFormProps) {
  return (
    <Form.Root id={id} onSubmit={onSubmit} {...methods}>
      <div className="flex flex-col gap-4">
        <Inputs.Name />
        <Inputs.Description />
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
