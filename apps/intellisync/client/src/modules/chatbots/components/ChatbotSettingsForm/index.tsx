import { Form } from '@/modules/forms/components';
import { UseChatbotSettingsFormMethods } from './use-chatbot-settings-form';
import { ChatbotSettingsFormData } from './inputs/schema';
import { inputs } from './inputs';

export { useChatbotSettingsForm } from './use-chatbot-settings-form';

type ChatbotSettingsFormProps = {
  onSubmit: (data: ChatbotSettingsFormData) => void;
  methods: UseChatbotSettingsFormMethods;
};

export async function ChatbotSettingsForm({
  methods,
  onSubmit,
}: ChatbotSettingsFormProps) {
  return (
    <Form.Root id="chatbotSettingsForm" onSubmit={onSubmit} {...methods}>
      <div className="flex flex-col gap-4">
        <inputs.Model />
        <inputs.Temperature />
      </div>
    </Form.Root>
  );
}
