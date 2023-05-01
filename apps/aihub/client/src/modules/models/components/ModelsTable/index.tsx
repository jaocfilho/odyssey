import { useState } from 'react';

import { Body } from './Body';
import { TableContainer } from './Container';
import { Header } from './Header';

const models = [
  {
    id: '123',
    name: 'French Translator',
    vibe: 'Funny',
    context: 'You are a helpful assistant...',
    created_at: null,
  },
  {
    id: '1234',
    name: 'French Translator',
    vibe: 'Funny',
    context: 'You are a helpful assistant...',
    created_at: null,
  },
  {
    id: '12345',
    name: 'French Translator',
    vibe: 'Funny',
    context: 'You are a helpful assistant...',
    created_at: null,
  },
];

export function ModelsTable() {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const checkRow = (modelId: string) => {
    setSelectedModels((value) => [...value, modelId]);
  };

  const uncheckRow = (modelId: string) => {
    setSelectedModels((value) => value.filter((model) => model !== modelId));
  };

  const rowIsChecked = (modelId: string) => selectedModels.includes(modelId);

  return (
    <TableContainer>
      <Header />
      <Body
        rows={models}
        checkRow={checkRow}
        uncheckRow={uncheckRow}
        rowIsChecked={rowIsChecked}
      />
    </TableContainer>
  );
}
