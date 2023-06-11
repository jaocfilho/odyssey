'use client';

import { ChatbotSettingsForm } from '../../ChatbotSettingsForm';
import { ButtonsArea } from './ButtonsArea';
import { SectionList } from '@/components/SectionList';
import { ChatbotsSettingsRow } from '@/modules/chatbots/entities';
import { useGeneralSettingsSection } from './use-general-settings-section';

type GeneralSettingsSectionProps = {
  id: string;
  initialData: ChatbotsSettingsRow;
};

export function GeneralSettingsSection({
  id,
  initialData,
}: GeneralSettingsSectionProps) {
  const { buttonsAreDisabled, handleCancel, handleSubmit, methods } =
    useGeneralSettingsSection({ id, initialData });

  return (
    <SectionList.Container>
      <SectionList.Info title="General settings" />
      <SectionList.Content>
        <div className="sm:max-w-xl">
          <ChatbotSettingsForm onSubmit={handleSubmit} methods={methods} />
        </div>
        <ButtonsArea onCancel={handleCancel} disabled={buttonsAreDisabled} />
      </SectionList.Content>
    </SectionList.Container>
  );
}
