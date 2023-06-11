'use client';

import { ChatbotSettingsForm } from '../../ChatbotSettingsForm';
import { SectionContainer } from '../SectionContainer';
import { SectionContent } from '../SectionContent';
import { SectionInfo } from '../SectionInfo';
import { ButtonsArea } from './ButtonsArea';
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
    <SectionContainer>
      <SectionInfo title="General settings" />
      <SectionContent>
        <div className="sm:max-w-xl">
          <ChatbotSettingsForm onSubmit={handleSubmit} methods={methods} />
        </div>
        <ButtonsArea onCancel={handleCancel} disabled={buttonsAreDisabled} />
      </SectionContent>
    </SectionContainer>
  );
}
