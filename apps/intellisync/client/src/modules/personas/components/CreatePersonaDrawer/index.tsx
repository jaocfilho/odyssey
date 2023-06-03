import { PersonaForm } from '../PersonaForm';
import { useCreatePersonaForm } from './use-create-persona-form';
import { SubmitButton } from './SubmitButton';
import { Drawer, type DrawerProps } from '@/components/Drawer';

type CreatePersonaDrawerProps = Pick<DrawerProps, 'triggerComponent'>;

export function CreatePersonaDrawer({
  triggerComponent,
}: CreatePersonaDrawerProps) {
  const { methods, onSubmit } = useCreatePersonaForm();

  return (
    <Drawer
      title="Create a new persona"
      triggerComponent={triggerComponent}
      onClose={() => methods.reset()}
      actionButton={(closeDrawer) => (
        <SubmitButton
          closeDrawer={closeDrawer}
          isSubmitSuccessful={methods.formState.isSubmitSuccessful}
        />
      )}
    >
      <PersonaForm
        id="createPersonaForm"
        onSubmit={onSubmit}
        methods={methods}
      />
    </Drawer>
  );
}
