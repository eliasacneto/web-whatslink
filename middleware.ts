import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const [browserLocale] = acceptLanguage.split(",");
    if (["en", "pt", "es"].includes(browserLocale)) {
      return browserLocale;
    }
  }
  return "pt"; // Idioma padrão
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request);
  const pathname = request.nextUrl.pathname;

  // Redireciona a rota raiz para o idioma detectado
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // Aplica o middleware de internacionalização
  return createMiddleware({
    locales: ["en", "pt", "es"],
    defaultLocale: "pt",
    localeDetection: false, // Desativa a detecção automática do next-intl
  })(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/"],
};
