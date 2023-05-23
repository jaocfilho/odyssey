export const personasQueryKeys = {
  base: ['personas'] as const,

  all: () => [...personasQueryKeys.base] as const,
  persona: (id: string) => [...personasQueryKeys.base, id] as const,
};
