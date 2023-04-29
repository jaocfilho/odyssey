import { Body } from './Body';
import { TableContainer } from './Container';
import { Header } from './Header';

const models = [
  {
    id: '123455',
    name: 'French Translator',
    vibe: 'Funny',
    context: 'You are a helpful assistant...',
  },
  {
    id: '123455',
    name: 'French Translator',
    vibe: 'Funny',
    context: 'You are a helpful assistant...',
  },
  {
    id: '123455',
    name: 'French Translator',
    vibe: 'Funny',
    context: 'You are a helpful assistant...',
  },
];

export function ModelsTable() {
  return (
    <TableContainer>
      <Header />
      <Body rows={models} />
    </TableContainer>
  );
}
