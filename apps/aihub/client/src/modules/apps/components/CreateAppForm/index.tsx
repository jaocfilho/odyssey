import { RefinementArea } from './RefinementArea';
import { CreateAppFormComponentRoot } from './CreateAppFormComponentRoot';
import { Inputs } from './Inputs';

export function CreateAppForm() {
  return (
    <CreateAppFormComponentRoot>
      <div className="flex flex-col gap-4">
        <Inputs.Name />
        <Inputs.Model />
        <Inputs.Description />
        <RefinementArea />
      </div>
    </CreateAppFormComponentRoot>
  );
}
