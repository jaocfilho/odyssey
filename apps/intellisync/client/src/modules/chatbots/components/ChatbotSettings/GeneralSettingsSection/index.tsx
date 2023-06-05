'use client';

import {
  ChatbotSettingsForm,
  useChatbotSettingsForm,
} from '../../ChatbotSettingsForm';
import { SectionContainer } from '../SectionContainer';
import { SectionContent } from '../SectionContent';
import { SectionInfo } from '../SectionInfo';

export function GeneralSettingsSection() {
  const { methods } = useChatbotSettingsForm({
    onSubmit: (data) => console.log(data),
  });

  return (
    <SectionContainer>
      <SectionInfo
        title="General settings"
        description="Use a permanent address where you can receive mail."
      />
      <SectionContent>
        <div className="sm:max-w-xl">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <ChatbotSettingsForm onSubmit={console.log} methods={methods} />
            </div>
          </div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
