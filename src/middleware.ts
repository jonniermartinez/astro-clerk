import { clerkMiddleware } from "@clerk/astro/server";

export const onRequest = clerkMiddleware();
// https://clerk.com/docs/references/astro/clerk-middleware