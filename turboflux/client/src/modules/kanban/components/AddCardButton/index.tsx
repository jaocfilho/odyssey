import { PlusButton } from '@/components/Buttons';

type AddCardButtonProps = {
  willAddCard: () => void;
};

export const AddCardButton = ({ willAddCard }: AddCardButtonProps) => {
  return <PlusButton onClick={willAddCard} />;
};
