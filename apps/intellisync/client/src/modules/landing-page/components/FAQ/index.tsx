'use client';

import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What version of ChatGPT are available?',
    answer:
      'By default all bots use GPT-3.5 turbo but Standard and Pro subscribers can use GPT-4',
  },
  {
    question: 'What is a data source?',
    answer:
      'Data sources are the way you connect you bot to your data. Currently we support importing data from multiple file formats, but we have plans to add more options such as Notion pages very soon.',
  },
  {
    question: 'What is a message credit?',
    answer:
      'One chatbot response with gpt-3.5-turbo (the default) costs 1 message credit. One chatbot response with gpt-4 costs 20 message credits. You can change which model your chatbot uses in the chatbot settings.',
  },
  {
    question: 'What is a storage token?',
    answer:
      'Storage tokens are used when you synchronise your data from a data source such as a pdf file with your bot. 1000 storage tokens roughly equals about 750 words. Each time you synchronise a data source it will use more storage tokens.',
  },
  {
    question: 'When are my message credits renewed?',
    answer:
      'Your message credits are renewed at the start of every calendar month regardless of when you subscribed. So if you subscribe on the 15th of January, your credits will be renewed on the 1st of February.',
  },
  {
    question: 'Who can use my chatbots?',
    answer:
      'Your organization chatbots are shared accross all members or you can make a chatbot public, so anyone can see it. You can also create personal chatbots that only you can see.',
  },
];

export function FAQ() {
  return (
    <div id="faq" className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
