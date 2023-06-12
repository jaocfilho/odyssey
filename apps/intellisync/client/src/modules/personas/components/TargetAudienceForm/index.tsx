import { Form } from '@/modules/forms/components';
import { personaInputs } from '../Inputs';
import {
  UpdatePersonaFormData,
  type UseUpdatePersonaFormMethods,
} from '../../hooks/use-update-persona-form';

type TargetAudienceFormProps = {
  onSubmit: (data: UpdatePersonaFormData) => void;
  methods: UseUpdatePersonaFormMethods;
};

export function TargetAudienceForm({
  methods,
  onSubmit,
}: TargetAudienceFormProps) {
  return (
    <Form.Root id="targetAudienceForm" onSubmit={onSubmit} {...methods}>
      <Form.Flex>
        <personaInputs.TargetAudience />
      </Form.Flex>
    </Form.Root>
  );
}
