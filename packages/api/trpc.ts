import { initTRPC } from "@trpc/server";
// import { Context } from "./context";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create(); // initTRPC.context<Context>().create();

// Base router and procedure helpers
const router = t.router;
const middleware = t.middleware;
const publicProcedure = t.procedure;
const mergeRouters = t.mergeRouters;

export { mergeRouters, middleware, publicProcedure, router };
