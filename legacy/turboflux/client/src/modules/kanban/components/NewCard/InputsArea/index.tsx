import { DescriptionInput } from '../DescriptionInput';
import { TitleInput } from '../TitleInput';

export const InputsArea = () => {
  return (
    <div
      className="
        overflow-hidden rounded border shadow-sm focus-within:ring-1
  
      dark:border-zinc-700 dark:focus-within:border-pink-600  dark:focus-within:ring-pink-600"
    >
      <TitleInput />
      <DescriptionInput />
    </div>
  );
};
