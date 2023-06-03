type OrganizationProps = {
  name: string;
};

export function Organization({ name }: OrganizationProps) {
  return (
    <p className="ml-4 text-sm font-medium cursor-pointer dark:text-zinc-500 dark:hover:text-zinc-400 leading-6">
      {name}
    </p>
  );
}
