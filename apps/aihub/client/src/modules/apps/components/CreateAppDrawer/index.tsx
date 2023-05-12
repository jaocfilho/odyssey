'use client';

import { Drawer, type DrawerProps } from '@/components/Drawer';
import { ActionButton } from './ActionButton';
import {
  Gpt35RefinementForm,
  useGpt35RefinementForm,
} from '@/modules/refinement/components/Gpt35RefinementForm';
import { CreateAppForm, useCreateAppForm } from '../CreateAppForm';

type CreateAppDrawerProps = Pick<DrawerProps, 'triggerComponent'>;

export function CreateAppDrawer({ triggerComponent }: CreateAppDrawerProps) {
  const {
    methods: gpt35RefinementFormMethods,
    customMethods: { submitForm: submitGpt35RefinementForm },
  } = useGpt35RefinementForm({ onSubmit: console.log });
  const {
    methods: createAppFormMethods,
    customMethods: { submitForm: submitCreateAppForm },
  } = useCreateAppForm({ onSubmit: console.log });

  const triggerRefinementForm = async () => {
    submitGpt35RefinementForm();

    submitCreateAppForm();

    return true;
  };

  return (
    <Drawer
      title="Create a new app"
      triggerComponent={triggerComponent}
      actionButton={(closeDrawer) => (
        <ActionButton
          triggerRefinementForm={triggerRefinementForm}
          closeDrawer={closeDrawer}
        />
      )}
    >
      <div className="flex flex-col gap-4">
        <CreateAppForm methods={createAppFormMethods} />
        <Gpt35RefinementForm methods={gpt35RefinementFormMethods} />
      </div>
    </Drawer>
  );
}
