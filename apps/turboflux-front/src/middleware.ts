import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { getToken } from 'next-auth/jwt';

// TODO after msw install, test if redirect is correct
export async function middleware(request: NextRequest) {
  const session = await getToken({
    req: request,
  });

  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // matcher docs reference
  // https://nextjs.org/docs/advanced-features/middleware#matching-paths
  matcher: '/dashboard',
};
