const chatbotsPathname = 'chatbots';

export const chatbotsUrls = {
  base: `/dashboard/${chatbotsPathname}` as const,
};

export function isChatbotsPath(pathname: string) {
  const splitedPathname = pathname.split('/');
  const path = splitedPathname[2];

  return path === chatbotsPathname;
}
