type TextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
};

export const TextArea = ({
  label,
  name,
  placeholder,
  rows = 4,
}: TextAreaProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          rows={rows}
          name={name}
          id={name}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:py-1.5 sm:text-sm sm:leading-6 dark:bg-slate-800 dark:hover:bg-slate-700"
          defaultValue={''}
        />
      </div>
    </div>
  );
};
