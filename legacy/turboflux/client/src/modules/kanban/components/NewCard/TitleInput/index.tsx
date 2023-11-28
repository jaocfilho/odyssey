export const TitleInput = () => {
  return (
    <>
      <label htmlFor="title" className="sr-only">
        Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="
        block w-full border-0 focus:ring-0 pt-2.5 text-lg font-medium
        
        dark:placeholder:text-zinc-400 dark:bg-zinc-900 dark:text-zinc-400"
        placeholder="Title"
      />
    </>
  );
};
