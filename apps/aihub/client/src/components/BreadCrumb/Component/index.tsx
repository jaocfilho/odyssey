const pages = [
  { name: 'Projects', current: false },
  { name: 'Project Nero', current: false },
  { name: 'Project Nero', current: false },
  { name: 'Project Nero', current: true },
];

export function BreadCrumbComponent() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <p
                className="ml-4 text-sm font-medium dark:text-zinc-500 dark:hover:text-zinc-400 leading-6"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
