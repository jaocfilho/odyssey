const settingsPathname = 'settings';

export const settingsUrls = {
  base: `/dashboard/${settingsPathname}` as const,
  api: () => `${settingsUrls.base}/api` as const,
};

export function isSettingsPath(pathname: string) {
  const splitedPathname = pathname.split('/');

  const path = splitedPathname[2];
  return path === settingsPathname;
}

export function isSettingsApiPath(pathname: string) {
  const url = settingsUrls.api();

  return pathname === url;
}
