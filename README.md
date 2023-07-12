# Welcome to my odyssey

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

## Getting Started

This repository is built on top of devcontainers. To get started, you need to have [Docker](https://www.docker.com/) installed on your machine.

After that, inside vscode you can open the command palette and run `Remote-Containers: Reopen in Container`.

All the necessary dependencies will be installed and you will be ready to go.

### Repositories filters

All the following command can be applied to specific subsets of packages. You can read more about it [here](https://pnpm.io/filtering).

But the most common filters already have a shortcut:
- `intell-client`: filter for `@intellisync/client`
- `intell-server`: filter for `@intellisync/server`
- `ui`: filter for `tailwind-ui`
- `workshop`: filter for `workshop`
- `turboflux`: filter for `@turboflux/client`

### Build

To build all apps and packages, run the following command:

```bash
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm run dev
```

### Testing

To test all apps and packages, run the following command:

```bash
pnpm run test
```

Most packages and apps also have a `test:watch` script that you can run to watch for changes and run the tests automatically.
