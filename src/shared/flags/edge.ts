import { createGetEdgeFlags } from "@happykit/flags/edge";
import { type AppFlags, config } from "./config.ts";

export const getEdgeFlags = createGetEdgeFlags<AppFlags>(config);
