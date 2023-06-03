export const organizationsQueryKeys = {
  base: ['organizations'] as const,

  all: () => [...organizationsQueryKeys.base] as const,
  organization: (id: string) => [...organizationsQueryKeys.base, id] as const,
};
