import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const session = await getToken({
    req: request,
  });

  if (!session) return NextResponse.redirect('/login');

  return NextResponse.next();
}

export const config = {
  // matcher docs reference
  // https://nextjs.org/docs/advanced-features/middleware#matching-paths
  matcher: '/dashboard',
};
