import { mapRange } from '@odyssey/arrays';

export function ChatbotsListLoading() {
  return (
    <div className="animate-pulse flex flex-col p-4 gap-4">
      {mapRange(
        (i) => (
          <div
            key={i}
            role="skeleton"
            className="h-4 dark:bg-grayScheme-800 rounded"
          />
        ),
        5
      )}
    </div>
  );
}
