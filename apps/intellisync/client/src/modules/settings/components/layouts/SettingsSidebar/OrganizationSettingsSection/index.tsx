import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SecondarySidebarList } from '@/components/SecondarySidebar/SecondarySidebarList';
import { SecondarySidebarSection } from '@/components/SecondarySidebar/SecondarySidebarSection';
import { SecondarySidebarSectionTitle } from '@/components/SecondarySidebar/SecondarySidebarSectionTitle';
import { ApiSidebarItem } from './ApiSidebarItem';

export function OrganizationSettingsSection() {
  return (
    <SecondarySidebarSection>
      <SecondarySidebarSectionTitle>
        Organization settings
      </SecondarySidebarSectionTitle>
      <SecondarySidebarList>
        <ApiSidebarItem />
      </SecondarySidebarList>
    </SecondarySidebarSection>
  );
}
