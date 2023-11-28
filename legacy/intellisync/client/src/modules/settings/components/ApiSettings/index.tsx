import { SectionList } from '@/components/SectionList';
import { ApikeyInput } from './ApikeyInput';

export function ApiSettings() {
  return (
    <SectionList.Root>
      <SectionList.Section
        title="API key"
        description="Your API is secured behind an API gateway which requires an API Key for every request."
      >
        <ApikeyInput />
      </SectionList.Section>
    </SectionList.Root>
  );
}
