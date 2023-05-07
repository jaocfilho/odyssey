export const appsUrls = {
  base: '/dashboard/apps' as const,
  details: {
    base: (id: string) => `${appsUrls.base}/${id}` as const,

    overview: (id: string) => `${appsUrls.details.base(id)}/overview` as const,

    prompt: (id: string) => `${appsUrls.details.base(id)}/prompt` as const,
  },
};
