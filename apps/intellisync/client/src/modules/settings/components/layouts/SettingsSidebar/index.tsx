import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SecondarySidebarSection } from '@/components/SecondarySidebar/SecondarySidebarSection';
import { SecondarySidebarSectionTitle } from '@/components/SecondarySidebar/SecondarySidebarSectionTitle';
import { OrganizationSettingsSection } from './OrganizationSettingsSection';
import { BillingSection } from './BillingSection';

export function SettingsSidebar() {
  return (
    <>
      <OrganizationSettingsSection />
      <BillingSection />
    </>
  );
}