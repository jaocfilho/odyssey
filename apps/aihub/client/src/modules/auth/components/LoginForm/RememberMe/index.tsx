export function RememberMe() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 rounded dark:border-white/10 text-emerald-600 focus:ring-emerald-600"
        />
        <label
          htmlFor="remember-me"
          className="ml-3 block text-sm leading-6 dark:text-zinc-400"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm leading-6">
        <a
          href="#"
          className="font-semibold text-emerald-600 hover:text-emerald-500"
        >
          Forgot password?
        </a>
      </div>
    </div>
  );
}
