import { Drawer, type DrawerProps } from 'tailwind-ui';
import { PersonaForm } from '../PersonaForm';
import { useCreatePersonaForm } from './use-create-persona-form';
import { SubmitButton } from './SubmitButton';

type CreatePersonaDrawerProps = Pick<DrawerProps, 'triggerComponent'>;

export function CreatePersonaDrawer({
  triggerComponent,
}: CreatePersonaDrawerProps) {
  const { methods } = useCreatePersonaForm();

  return (
    <Drawer
      title="Create a new app"
      triggerComponent={triggerComponent}
      onClose={() => methods.reset()}
      actionButton={(closeDrawer) => (
        <SubmitButton
          closeDrawer={closeDrawer}
          isSubmitSuccessful={methods.formState.isSubmitSuccessful}
        />
      )}
    >
      <PersonaForm id="createPersonaForm" methods={methods} />
    </Drawer>
  );
}
