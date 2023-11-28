export const DescriptionInput = () => {
  return (
    <>
      <label htmlFor="description" className="sr-only">
        Description
      </label>
      <textarea
        rows={2}
        name="description"
        id="description"
        className="
        block w-full resize-none border-0 py-0 focus:ring-0
        
        dark:text-zinc-400 dark:placeholder:text-zinc-400  dark:bg-zinc-900
        
        sm:text-sm sm:leading-6"
        placeholder="Write a description..."
        defaultValue={''}
      />
    </>
  );
};
