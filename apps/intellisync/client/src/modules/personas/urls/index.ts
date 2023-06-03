const personasPathname = 'personas';

export const personasUrls = {
  base: `/dashboard/${personasPathname}` as const,

  details: {
    base: (id: string) => `${personasUrls.base}/${id}` as const,

    overview: (id: string) =>
      `${personasUrls.details.base(id)}/overview` as const,

    settings: (id: string) =>
      `${personasUrls.details.base(id)}/settings` as const,
  },
};

export function isPersonasPath(pathname: string) {
  const splitedPathname = pathname.split('/');
  const path = splitedPathname[2];

  return path === personasPathname;
}
