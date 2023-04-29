import { Header } from './Header';
import { Row } from './Row';

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
    <div className="px-4 sm:px-6 lg:px-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y dark:divide-zinc-50/10">
            <Header />
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-zinc-50/10 dark:bg-zinc-950">
              {models.map(({ id, name, vibe, context }) => (
                <Row
                  key={id}
                  id={id}
                  name={name}
                  vibe={vibe}
                  context={context}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
