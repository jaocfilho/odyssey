const chatbotsPathname = 'chatbots';

export const chatbotsUrls = {
  base: `/dashboard/${chatbotsPathname}` as const,

  details: {
    base: (id: string) => `${chatbotsUrls.base}/${id}` as const,
    overview: (id: string) =>
      `${chatbotsUrls.details.base(id)}/overview` as const,
  },
};

export function isChatbotsPath(pathname: string) {
  const splitedPathname = pathname.split('/');
  const path = splitedPathname[2];

  return path === chatbotsPathname;
}