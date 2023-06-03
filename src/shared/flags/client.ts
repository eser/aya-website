import {
  createUseFlags,
  type InitialFlagState as GenericInitialFlagState,
} from "@happykit/flags/client";
import { createUseFlagBag } from "@happykit/flags/context";
import { type AppFlags, config } from "./config.ts";

type InitialFlagState = GenericInitialFlagState<AppFlags>;
const useFlags = createUseFlags<AppFlags>(config);
const useFlagBag = createUseFlagBag<AppFlags>();

export {
  type InitialFlagState,
  useFlags,
  useFlagBag,
};
