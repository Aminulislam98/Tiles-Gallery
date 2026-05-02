import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const { pathname } = new URL(request.url);
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  // if (!session) {
  //   return NextResponse.redirect(new URL("/register", request.url));
  // }
  if (!session) {
    const loginUrl = new URL("/login", request.url); // 👈 request.url use করো
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  //   return NextResponse.redirect(new URL("/home", request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/profile", "/allTiles/:id"],
};
