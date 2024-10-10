import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "pt", "es"];
const defaultLocale = "pt";

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(",")[0].split("-")[0];
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return createMiddleware({
    locales,
    defaultLocale,
    localeDetection: false,
  })(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
