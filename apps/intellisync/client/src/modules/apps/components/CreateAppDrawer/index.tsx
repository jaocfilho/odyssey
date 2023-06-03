'use client';

import { Drawer, type DrawerProps } from 'tailwind-ui';
import { ActionButton } from './ActionButton';
import { Gpt35RefinementForm } from '../Gpt35RefinementForm';
import { CreateAppForm } from '../CreateAppForm';
import { useDrawerForms } from './use-drawer-forms';
import { RefinementSection } from './RefinementSection';

type CreateAppDrawerProps = Pick<DrawerProps, 'triggerComponent'>;

export function CreateAppDrawer({ triggerComponent }: CreateAppDrawerProps) {
  const {
    createAppFormMethods,
    gpt35RefinementFormMethods,
    submitForms,
    resetForms,
  } = useDrawerForms();

  return (
    <Drawer
      title="Create a new app"
      triggerComponent={triggerComponent}
      onClose={resetForms}
      actionButton={(closeDrawer) => (
        <ActionButton
          submitForms={submitForms}
          closeDrawer={closeDrawer}
          createAppIsSubmited={
            createAppFormMethods.formState.isSubmitSuccessful
          }
          refinementIsSubmited={
            gpt35RefinementFormMethods.formState.isSubmitSuccessful
          }
        />
      )}
    >
      <div className="flex flex-col">
        <div className="border-b dark:border-zinc-50/10 pb-12">
          <CreateAppForm methods={createAppFormMethods} />
        </div>
        <RefinementSection>
          <Gpt35RefinementForm methods={gpt35RefinementFormMethods} />
        </RefinementSection>
      </div>
    </Drawer>
  );
}
