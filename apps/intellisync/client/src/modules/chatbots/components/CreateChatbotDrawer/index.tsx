import { Drawer, type DrawerProps } from 'tailwind-ui';
import { ChatbotForm } from '../ChatbotForm';
import { useCreateChatbotForm } from './use-create-chatbot-form';
import { SubmitButton } from './SubmitButton';

type CreateChatbotDrawerProps = Pick<DrawerProps, 'triggerComponent'>;

export function CreateChatbotDrawer({
  triggerComponent,
}: CreateChatbotDrawerProps) {
  const { methods, onSubmit } = useCreateChatbotForm();

  return (
    <Drawer
      title="Create a new chatbot"
      triggerComponent={triggerComponent}
      onClose={() => methods.reset()}
      actionButton={(closeDrawer) => (
        <SubmitButton
          closeDrawer={closeDrawer}
          isSubmitSuccessful={methods.formState.isSubmitSuccessful}
        />
      )}
    >
      <ChatbotForm
        id="createChatbotForm"
        onSubmit={onSubmit}
        methods={methods}
      />
    </Drawer>
  );
}
