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
    <div className="px-4 sm:px-6 lg:px-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y dark:divide-zinc-50/10">
            <Header />
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-zinc-50/10 dark:bg-zinc-950">
              {models.map((model) => (
                <tr key={model.id}>
                  <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm dark:text-zinc-200 sm:pl-0">
                    {model.name}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-sm font-medium dark:text-zinc-200">
                    {model.vibe}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-sm dark:text-zinc-200">
                    {model.context}
                  </td>
                  <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a
                      href="#"
                      className="text-emerald-600 hover:text-emerald-500"
                    >
                      Edit<span className="sr-only">, {model.id}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
