import { Form } from '@/modules/forms/components';
import { Inputs } from './Inputs';
import { type UseGpt35RefinementFormMethods } from './use-gpt35-refinement-form';

export { useGpt35RefinementForm } from './use-gpt35-refinement-form';

type Gpt35RefinementFormProps = {
  methods: UseGpt35RefinementFormMethods;
};

export function Gpt35RefinementForm({ methods }: Gpt35RefinementFormProps) {
  return (
    <Form.Root id="gpt3.5RefinementForm" {...methods}>
      <div className="flex flex-col gap-4">
        <Inputs.Style />
        <Inputs.Temperature />
      </div>
    </Form.Root>
  );
}
