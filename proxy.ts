// before version 16, it was called middleware instead of proxy
//proxy can help to protect links
// the below function works before every page request or every API request
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './lib/auth/auth';

// the below request runs just after reading the header, but before hitting the route
export default async function proxy(request: NextRequest) {
  const loggedSession = await getSession();
  //const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');
  const isSignInPage = request.nextUrl.pathname.startsWith('/sign-in');
  const isSignUpPage = request.nextUrl.pathname.startsWith('/sign-up');

  if ((isSignInPage || isSignUpPage) && loggedSession?.user) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  return NextResponse.next(); // just tells move forward
}
