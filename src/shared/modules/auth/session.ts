import "server-only";

import { cookies } from "next/headers";

import { decrypt, encrypt } from "./jtw-auth.ts";

const SESSION_COOKIE_NAME = "session";
const SESSION_COOKIE_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000;

type ReadonlyRequestCookies = Awaited<ReturnType<typeof cookies>>;

function getCookie(cookies: ReadonlyRequestCookies, name: string) {
  const cookie = cookies.get(name);

  if (cookie === undefined) {
    return null;
  }

  return cookie.value;
}

function setCookie(cookies: ReadonlyRequestCookies, name: string, value: string, expiresAt: Date) {
  cookies.set(name, value, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

function unsetCookie(cookies: ReadonlyRequestCookies, name: string) {
  cookies.delete(name);
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + SESSION_COOKIE_EXPIRATION_TIME);
  const session = await encrypt({ userId, expiresAt });

  const cookieStore = await cookies();
  setCookie(cookieStore, SESSION_COOKIE_NAME, session, expiresAt);
}

export async function getSession() {
  const cookieStore = await cookies();

  return getCookie(cookieStore, SESSION_COOKIE_NAME);
}

export async function updateSession() {
  const cookieStore = await cookies();

  const session = getCookie(cookieStore, SESSION_COOKIE_NAME);

  if (session === null) {
    return null;
  }

  const payload = await decrypt(session);

  if (payload === undefined) {
    return null;
  }

  const expiresAt = new Date(Date.now() + SESSION_COOKIE_EXPIRATION_TIME);

  setCookie(cookieStore, SESSION_COOKIE_NAME, session, expiresAt);
}

export async function deleteSession() {
  const cookieStore = await cookies();

  unsetCookie(cookieStore, SESSION_COOKIE_NAME);
}
