import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip the unlock page itself
  if (pathname.startsWith("/case-studies/unlock")) {
    return NextResponse.next();
  }

  const isAuthenticated =
    request.cookies.get("case_study_auth")?.value === "1";

  if (!isAuthenticated) {
    const unlockUrl = new URL("/case-studies/unlock", request.url);
    unlockUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(unlockUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/case-studies/:path+"],
};
