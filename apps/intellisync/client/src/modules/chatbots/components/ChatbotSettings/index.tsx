import { Button } from 'tailwind-ui';
import { SectionContainer } from './SectionContainer';
import { SectionInfo } from './SectionInfo';

export function ChatbotSettings() {
  return (
    <div className="divide-y dark:divide-zinc-50/10">
      <SectionContainer>
        <SectionInfo
          title="General settings"
          description="Use a permanent address where you can receive mail."
        />

        <div className="md:col-span-2">
          <form>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="logout-password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Your password
                </label>
                <div className="mt-2">
                  <input
                    id="logout-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex">
              <Button colorScheme="emerald">Log out other sessions</Button>
            </div>
          </form>
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionInfo
          title="Delete chatbot"
          description="This action is not reversible. All information related to this chatbot will be deleted permanently."
        />

        <form className="flex items-start md:col-span-2">
          <Button colorScheme="red">Yes, delete my chatbot</Button>
        </form>
      </SectionContainer>
    </div>
  );
}
