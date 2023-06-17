import { SecondarySidebarItem } from '@/components/SecondarySidebar/SecondarySidebarItem';
import { SecondarySidebarList } from '@/components/SecondarySidebar/SecondarySidebarList';
import { SecondarySidebarSection } from '@/components/SecondarySidebar/SecondarySidebarSection';
import { SecondarySidebarSectionTitle } from '@/components/SecondarySidebar/SecondarySidebarSectionTitle';
import { SubscriptionSidebarItem } from './SubscriptionSidebarItem';

export function BillingSection() {
  return (
    <SecondarySidebarSection isLastSection>
      <SecondarySidebarSectionTitle>Billing</SecondarySidebarSectionTitle>
      <SecondarySidebarList>
        <SubscriptionSidebarItem />
        <SecondarySidebarItem>Usage</SecondarySidebarItem>
      </SecondarySidebarList>
    </SecondarySidebarSection>
  );
}
