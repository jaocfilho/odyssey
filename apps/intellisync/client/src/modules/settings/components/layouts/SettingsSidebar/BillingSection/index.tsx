import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SecondarySidebarList } from '@/components/SecondarySidebar/SecondarySidebarList';
import { SecondarySidebarSection } from '@/components/SecondarySidebar/SecondarySidebarSection';
import { SecondarySidebarSectionTitle } from '@/components/SecondarySidebar/SecondarySidebarSectionTitle';

export function BillingSection() {
  return (
    <SecondarySidebarSection>
      <SecondarySidebarSectionTitle>Billing</SecondarySidebarSectionTitle>
      <SecondarySidebarList>
        <SecondarySidebarItem>Subscription</SecondarySidebarItem>
        <SecondarySidebarItem>Usage</SecondarySidebarItem>
      </SecondarySidebarList>
    </SecondarySidebarSection>
  );
}
