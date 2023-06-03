export const profilesQueryKeys = {
  base: ['profiles'] as const,

  all: () => [...profilesQueryKeys.base] as const,
  profile: (id: string) => [...profilesQueryKeys.base, id] as const,
};
