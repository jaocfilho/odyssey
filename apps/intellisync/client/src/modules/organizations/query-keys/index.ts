export const organizationsQueryKeys = {
  base: ['organizations'] as const,

  all: () => [...organizationsQueryKeys.base] as const,
  organization: (id: string) => [...organizationsQueryKeys.base, id] as const,
  current: () => [...organizationsQueryKeys.base, 'current'] as const,
  messageCredits: (id: string) =>
    [...organizationsQueryKeys.base, id, 'message-credits'] as const,
};

export function currentOrganizationQueryKey() {
  return organizationsQueryKeys.current();
}
