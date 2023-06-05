type SectionInfoProps = {
  title: string;
  description: string;
};

export function SectionInfo({ title, description }: SectionInfoProps) {
  return (
    <div>
      <h2 className="text-base font-semibold leading-7 dark:text-zinc-50">
        {title}
      </h2>
      <p className="mt-1 text-sm leading-6 dark:text-zinc-400">{description}</p>
    </div>
  );
}
