import { useSelectChatbotSettingsById } from '@/modules/chatbots/hooks/use-select-chatbot-settings-by-id';
import { useUpdateChatbotSettingsById } from '@/modules/chatbots/hooks/use-update-chatbot-settings-by-id';
import { useChatbotSettingsForm } from '../../../ChatbotSettingsForm';
import { type ChatbotSettingsFormData } from '../../../ChatbotSettingsForm/use-chatbot-settings-form';
import { type ChatbotsSettingsRow } from '@/modules/chatbots/entities';

type UseGeneralSettingsSectionProps = {
  id: string;
  initialData: ChatbotsSettingsRow;
};

export function useGeneralSettingsSection({
  id,
  initialData,
}: UseGeneralSettingsSectionProps) {
  const chatbotQuery = useSelectChatbotSettingsById({ id }, { initialData });

  const mutation = useUpdateChatbotSettingsById();

  const { methods, customMethods } = useChatbotSettingsForm({
    defaultValues: {
      model: chatbotQuery.data?.model,
      temperature: chatbotQuery.data?.temperature,
    },
  });

  const handleSubmit = (settings: ChatbotSettingsFormData) => {
    mutation.mutate({ id, settings });
  };

  const handleCancel = customMethods.resetToDefaultValues;

  const isDirty = methods.formState.isDirty;
  const buttonsAreDisabled = !isDirty;

  methods.formState.isSubmitSuccessful && methods.reset(methods.getValues());

  return {
    handleSubmit,
    handleCancel,
    buttonsAreDisabled,
    methods,
  };
}
