import {
  createGetFlags,
  type GenericEvaluationResponseBody,
} from "@happykit/flags/server";
import { type AppFlags, config } from "./config.ts";

export type EvaluationResponseBody = GenericEvaluationResponseBody<AppFlags>;
export const getFlags = createGetFlags<AppFlags>(config);
