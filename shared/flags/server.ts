import {
  createGetFlags,
  type GenericEvaluationResponseBody,
} from "@happykit/flags/server";
import { type AppFlags, config } from "./config.ts";

type EvaluationResponseBody = GenericEvaluationResponseBody<AppFlags>;
const getFlags = createGetFlags<AppFlags>(config);

export {
  type EvaluationResponseBody,
  getFlags,
};
