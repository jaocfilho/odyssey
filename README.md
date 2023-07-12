# Odyssey

This is my personal monorepo built with [turborepo](https://turbo.build/repo). All my work is built here, so I can share and reuse code across all my projects.

Feel free to use it as an inspiration or source of knowledge for yourself.
Also, feel free to contact me if you are interested in my work. I'm always open to amazing ideas.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `workshop`: built with [Storybook](https://storybook.js.org/) to test the components from tailwind-ui
- `intellisync-client`: built with [Next.js 13](https://nextjs.org/), this repository has the source code for the [IntellisyncAI](https://www.intellisyncai.com/) frontend.
- `intellisync-server`: built with [Supabase](https://supabase.com/), this repository has the source code for the [IntellisyncAI](https://www.intellisyncai.com/) backend.
- `tailwind-ui`: a React component library built with [Tailwind](https://tailwindcss.com/) shared by all apps.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

And many more utilities packages.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/) and tested with [Vitest](https://vitest.dev/)

### Apps in production
- [IntellisyncAI](https://www.intellisyncai.com/)

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
