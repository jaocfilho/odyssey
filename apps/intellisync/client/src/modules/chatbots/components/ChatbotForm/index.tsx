import { Form } from '@/modules/forms/components';
import { inputs } from './inputs';
import { type ChatbotFormData } from './inputs/schema';
import { type UseChatbotFormMethods } from './use-chatbot-form';
export { useChatbotForm } from './use-chatbot-form';
export { type ChatbotFormData } from './inputs/schema';

type ChatbotFormProps = {
  id: string;
  onSubmit: (data: ChatbotFormData) => void;
  methods: UseChatbotFormMethods;
};

export function ChatbotForm({ id, methods, onSubmit }: ChatbotFormProps) {
  return (
    <Form.Root id={id} onSubmit={onSubmit} {...methods}>
      <div className="flex flex-col gap-4">
        <inputs.Name />
      </div>
    </Form.Root>
  );
}
