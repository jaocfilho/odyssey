import { useState } from 'react';

import { SelectItem } from '..';

type UseSelectedProps = {
  onChange?: (option: SelectItem) => void;
};

export function useSelected({ onChange }: UseSelectedProps) {
  const [selected, setSelected] = useState<SelectItem>();

  const handleChange = (option: SelectItem) => {
    setSelected(option);
    if (typeof onChange === 'function') {
      onChange(option);
    }
  };

  return { selected, handleChange };
}
