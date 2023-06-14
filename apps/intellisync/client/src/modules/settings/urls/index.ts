const settingsPathname = 'settings';

export const settingsUrls = {
  base: `/dashboard/${settingsPathname}` as const,
};

export function isSettingsPath(pathname: string) {
  const splitedPathname = pathname.split('/');

  const path = splitedPathname[2];
  return path === settingsPathname;
}
