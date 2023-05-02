export const modelsUrls = {
  base: '/dashboard/models' as const,
  details: {
    base: (id: string) => `${modelsUrls.base}/${id}` as const,

    overview: (id: string) =>
      `${modelsUrls.details.base(id)}/overview` as const,

    prompt: (id: string) => `${modelsUrls.details.base(id)}/prompt` as const,
  },
};
