type TextInputProps = {
  label: string;
  name: string;
  placeholder?: string;
};

export const TextInput = ({ label, name, placeholder }: TextInputProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6">
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={name}
          id={name}
          className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 dark:bg-slate-800 dark:hover:bg-slate-700"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
