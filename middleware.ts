import { NextRequest, NextResponse } from 'next/server';

import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

import { defaultLocale, locales } from './app/i18n';

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

// Get the preferred locale, similar to above or using a library
const getLocale = (request: NextRequest): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const headers: Negotiator.Headers = {};

  request.headers.forEach((value, key) => (headers[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
};

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }

  // return NextResponse.next()
}
