import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SecondarySidebarSection } from '@/components/SecondarySidebar/SecondarySidebarSection';
import { SecondarySidebarSectionTitle } from '@/components/SecondarySidebar/SecondarySidebarSectionTitle';

export function SettingsSidebar() {
  return (
    <>
      <SecondarySidebarSection>
        <SecondarySidebarSectionTitle>
          Organization settings
        </SecondarySidebarSectionTitle>
        <SecondarySidebarItem>API</SecondarySidebarItem>
      </SecondarySidebarSection>
      <SecondarySidebarSection isLastSection>
        <SecondarySidebarSectionTitle>Billing</SecondarySidebarSectionTitle>
      </SecondarySidebarSection>
    </>
  );
}
