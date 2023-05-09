export const appsQueryKeys = {
  base: ['apps'] as const,

  all: () => [...appsQueryKeys.base] as const,
  app: (id: string) => [...appsQueryKeys.base, id] as const,
};
