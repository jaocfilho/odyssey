export const usersQueryKeys = {
  base: ['user'] as const,

  user: () => usersQueryKeys.base,
};
