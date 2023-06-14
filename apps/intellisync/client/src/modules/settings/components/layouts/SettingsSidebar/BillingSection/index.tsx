import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SecondarySidebarSection } from '@/components/SecondarySidebar/SecondarySidebarSection';
import { SecondarySidebarSectionTitle } from '@/components/SecondarySidebar/SecondarySidebarSectionTitle';

export function BillingSection() {
  return (
    <SecondarySidebarSection>
      <SecondarySidebarSectionTitle>Billing</SecondarySidebarSectionTitle>
      <SecondarySidebarItem>Subscription</SecondarySidebarItem>
      <SecondarySidebarItem>Usage</SecondarySidebarItem>
    </SecondarySidebarSection>
  );
}
