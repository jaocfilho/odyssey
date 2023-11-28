export function Separator() {
  return (
    <div className="relative mt-10">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t dark:border-white/5" />
      </div>
      <div className="relative flex justify-center text-sm font-medium leading-6">
        <span className="px-6 dark:bg-zinc-950 dark:text-zinc-200">
          Or continue with
        </span>
      </div>
    </div>
  );
}
