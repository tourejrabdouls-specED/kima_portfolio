import { NextRequest, NextResponse } from 'next/server';

const ADMIN_KEY = process.env.ADMIN_KEY || 'changeme123';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith('/admin') && !path.startsWith('/admin/login')) {
    const headerKey = request.headers.get('x-admin-key');
    const cookieKey = request.cookies.get('admin_key')?.value;

    if (headerKey !== ADMIN_KEY && cookieKey !== ADMIN_KEY) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
