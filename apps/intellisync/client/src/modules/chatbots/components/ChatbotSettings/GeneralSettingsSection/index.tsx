'use client';

import {
  ChatbotSettingsForm,
  useChatbotSettingsForm,
} from '../../ChatbotSettingsForm';
import { ChatbotSettingsFormSubmitButton } from '../../ChatbotSettingsForm/SubmitButton';
import { SectionContainer } from '../SectionContainer';
import { SectionContent } from '../SectionContent';
import { SectionInfo } from '../SectionInfo';

export function GeneralSettingsSection() {
  const { methods } = useChatbotSettingsForm({
    onSubmit: () => {},
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
            onSubmit={(data) => console.log(data)}
            methods={methods}
          />
        </div>
        <div className="mt-8 flex">
          <ChatbotSettingsFormSubmitButton />
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
