'use client';

import { Button } from 'tailwind-ui';
import {
  ChatbotSettingsForm,
  useChatbotSettingsForm,
} from '../../ChatbotSettingsForm';
import { SectionContainer } from '../SectionContainer';
import { SectionContent } from '../SectionContent';
import { SectionInfo } from '../SectionInfo';
import { ButtonsArea } from './ButtonsArea';

export function GeneralSettingsSection() {
  const defaultValues = {
    model: 'gpt-3.5-turbo',
    temperature: 1,
  };

  const { methods, customMethods } = useChatbotSettingsForm({
    onSubmit: () => {},
    defaultValues,
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
        <ButtonsArea onCancel={customMethods.resetToDefaultValues} />
      </SectionContent>
    </SectionContainer>
  );
}
