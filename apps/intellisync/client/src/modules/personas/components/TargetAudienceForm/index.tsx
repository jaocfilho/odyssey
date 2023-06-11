import { Form } from '@/modules/forms/components';
import {
  type TargetAudienceFormData,
  type UseTargetAudienceFormMethods,
} from './use-target-audience-form';
import { personaInputs } from '../Inputs';

type TargetAudienceFormProps = {
  onSubmit: (data: TargetAudienceFormData) => void;
  methods: UseTargetAudienceFormMethods;
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
