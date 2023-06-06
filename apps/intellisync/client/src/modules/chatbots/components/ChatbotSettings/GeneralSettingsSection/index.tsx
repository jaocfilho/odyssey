'use client';

import { useSelectChatbotSettingsById } from '@/modules/chatbots/hooks/use-select-chatbot-settings-by-id';
import {
  ChatbotSettingsForm,
  useChatbotSettingsForm,
} from '../../ChatbotSettingsForm';
import { SectionContainer } from '../SectionContainer';
import { SectionContent } from '../SectionContent';
import { SectionInfo } from '../SectionInfo';
import { ButtonsArea } from './ButtonsArea';
import { SelectChatbotSettingsByIdReturnData } from '@/modules/chatbots/api/base';
import { useUpdateChatbotSettingsById } from '@/modules/chatbots/hooks/use-update-chatbot-settings-by-id';

type GeneralSettingsSectionProps = {
  id: string;
  initialData: NonNullable<SelectChatbotSettingsByIdReturnData>;
};

export function GeneralSettingsSection({
  id,
  initialData,
}: GeneralSettingsSectionProps) {
  const chatbotQuery = useSelectChatbotSettingsById({ id }, { initialData });

  const mutation = useUpdateChatbotSettingsById();

  const { methods, customMethods } = useChatbotSettingsForm({
    onSubmit: (data) => {
      mutation.mutate({ id, settings: data });
    },
    defaultValues: {
      model: chatbotQuery.data!.model,
      temperature: chatbotQuery.data!.temperature,
    },
  });

  return (
    <SectionContainer>
      <SectionInfo
        title="General settings"
        description="Use a permanent address where you can receive mail."
      />
      <SectionContent>
        <div className="sm:max-w-xl">
          <ChatbotSettingsForm
            onSubmit={(data) => {
              mutation.mutate({ id, settings: data });
            }}
            methods={methods}
          />
        </div>
        <ButtonsArea onCancel={customMethods.resetToDefaultValues} />
      </SectionContent>
    </SectionContainer>
  );
}
