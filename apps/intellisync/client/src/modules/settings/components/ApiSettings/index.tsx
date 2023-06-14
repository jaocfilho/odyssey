import { SectionList } from '@/components/SectionList';

export function ApiSettings() {
  return (
    <SectionList.Root>
      <SectionList.Section
        title="API keys"
        description="Your API is secured behind an API gateway which requires an API Key for every request."
      >
        api keys
      </SectionList.Section>
    </SectionList.Root>
  );
}
