import { createGetEdgeFlags } from "@happykit/flags/edge";
import { type AppFlags, config } from "./config.ts";

const getEdgeFlags = createGetEdgeFlags<AppFlags>(config);

export {
  getEdgeFlags,
};
