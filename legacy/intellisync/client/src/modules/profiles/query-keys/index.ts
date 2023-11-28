export const profilesQueryKeys = {
  base: ['profile'] as const,

  profile: () => profilesQueryKeys.base,
};
