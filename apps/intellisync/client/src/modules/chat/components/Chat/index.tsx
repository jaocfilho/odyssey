'use client';

import { SystemMessage } from './SystemMessage';
import { UserMessage } from './UserMessage';
import { NewMessageForm } from './NewMessageForm';
import { useChat } from '../../hooks/use-chat';

const derp =
  "I apologize for the confusion. It appears that `userEvent` does not have built-in support for simulating the Shift key along with Enter. As a workaround, you can manually trigger the keydown event with the desired key and modifier using `fireEvent` from React Testing Library. Here's an updated example:\n\n```tsx\nimport { render, screen, fireEvent } from '@testing-library/react';\nimport ChatForm from './ChatForm';\n\ntest('handles submitting on Shift + Enter', () => {\n render(<ChatForm />);\n\n const t…tarea, { key: 'Enter', shiftKey: true });\n\n // Assert that the submit handler was called\n // Add your own assertion here based on your specific effect\n});\n```\n\nIn this updated test case, `fireEvent.keyDown()` is used to manually trigger the keydown event on the textarea. By passing `{ key: 'Enter', shiftKey: true }` as the second argument, you simulate pressing the Enter key while holding the Shift key.\n\nPlease give this updated approach a try, and let me know if you have any further questions.";

type ChatProps = {};

export function Chat({}: ChatProps) {
  const { chat, addUserMessage } = useChat({
    onAddUserMessage: console.log,
    initialState: [
      { id: 1, author: 'user', message: 'I need help on a test' },
      { id: 2, author: 'system', message: derp },
    ],
  });

  return (
    <div className="max-w-6xl flex flex-col h-full justify-between mx-auto p-4">
      <div className="flex flex-col gap-4 overflow-y-auto px-4">
        {chat.map(({ message, author, id }) =>
          author === 'system' ? (
            <SystemMessage key={id} message={message} />
          ) : (
            <UserMessage key={id} message={message} />
          )
        )}
      </div>
      <div className="my-8 px-4">
        <NewMessageForm onSubmit={addUserMessage} />
      </div>
    </div>
  );
}
