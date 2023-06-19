const chatbotsPathname = 'chatbots';

export const chatbotsUrls = {
  base: `/dashboard/${chatbotsPathname}` as const,

  details: {
    base: (id: string) => `${chatbotsUrls.base}/${id}` as const,
    overview: (id: string) =>
      `${chatbotsUrls.details.base(id)}/overview` as const,
    chat: (id: string) => `${chatbotsUrls.details.base(id)}/chat` as const,
    persona: (id: string) =>
      `${chatbotsUrls.details.base(id)}/persona` as const,
    settings: (id: string) =>
      `${chatbotsUrls.details.base(id)}/settings` as const,
    dataSource: (id: string) =>
      `${chatbotsUrls.details.base(id)}/data-source` as const,
  },
};

export function isChatbotsPath(pathname: string) {
  const splitedPathname = pathname.split('/');
  const path = splitedPathname[2];

  return path === chatbotsPathname;
}
