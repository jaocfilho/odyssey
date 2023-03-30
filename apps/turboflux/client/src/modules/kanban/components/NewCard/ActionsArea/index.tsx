export const ActionsArea = () => {
  return (
    <div
      className="
        flex items-center justify-end space-x-3 px-2 py-2 
      
        sm:px-3
      "
    >
      <div className="flex-shrink-0">
        <button
          type="submit"
          className="
          inline-flex items-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          Create
        </button>
      </div>
    </div>
  );
};
