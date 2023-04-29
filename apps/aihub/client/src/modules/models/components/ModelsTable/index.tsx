import { Body } from './Body';
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
    <div className="flow-root">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y dark:divide-zinc-50/10">
          <Header />
          <Body rows={models} />
        </table>
      </div>
    </div>
  );
}
