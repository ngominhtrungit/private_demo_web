import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/detail')) {
    const id = url.searchParams.get('id');
    // Only allow numeric IDs
    if (!id || !/^\d+$/.test(id)) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/detail', '/detail/:path*'],
};
