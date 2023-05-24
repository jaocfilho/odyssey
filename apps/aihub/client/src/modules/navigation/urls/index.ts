import { personasUrls } from '@/modules/personas/urls';

export const appsUrls = {
  base: '/dashboard/apps' as const,

  details: {
    base: (id: string) => `${appsUrls.base}/${id}` as const,

    overview: (id: string) => `${appsUrls.details.base(id)}/overview` as const,

    prompt: (id: string) => `${appsUrls.details.base(id)}/prompt` as const,

    refinement: (id: string) =>
      `${appsUrls.details.base(id)}/refinement` as const,
  },

  create: () => `${appsUrls.base}/create-app` as const,
};

export const urlPaths = {
  apps: appsUrls,
  personas: personasUrls,
};
