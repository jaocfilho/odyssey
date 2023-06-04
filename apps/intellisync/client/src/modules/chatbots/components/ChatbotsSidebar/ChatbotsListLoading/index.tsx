import { mapRange } from '@odyssey/arrays';

export function ChatbotsListLoading() {
  return (
    <div className="flex flex-col animate-pulse space-y-1">
      {mapRange(
        (i) => (
          <div
            key={i}
            role="skeleton"
            className="h-2 dark:bg-zinc-800 rounded"
          />
        ),
        5
      )}
    </div>
  );
}
