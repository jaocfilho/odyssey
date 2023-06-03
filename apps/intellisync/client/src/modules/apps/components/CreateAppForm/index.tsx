import { Inputs } from './Inputs';
import { UseCreateAppFormMethods } from './use-create-app-form';
import { CreateAppFormComponentRoot } from './CreateAppFormComponentRoot';

export { useCreateAppForm } from './use-create-app-form';

type CreateAppFormProps = {
  methods: UseCreateAppFormMethods;
};

export function CreateAppForm({ methods }: CreateAppFormProps) {
  return (
    <CreateAppFormComponentRoot methods={methods}>
      <div className="flex flex-col gap-4">
        <Inputs.Name />
        <Inputs.Model />
        <Inputs.Description />
      </div>
    </CreateAppFormComponentRoot>
  );
}
