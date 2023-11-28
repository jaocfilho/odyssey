type MenuHeaderProps = {
  email: string;
};

export function MenuHeader({ email }: MenuHeaderProps) {
  return (
    <>
      <p className="text-sm dark:text-grayScheme-400">Account preferences</p>
      <p className="truncate text-sm font-medium text-grayScheme-900 dark:text-grayScheme-200">
        {email}
      </p>
    </>
  );
}
