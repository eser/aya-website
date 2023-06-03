import { type Configuration } from "@happykit/flags/config";

// You can replace this with your exact flag types
type AppFlags = { [key: string]: boolean | number | string | null };

const config: Configuration<AppFlags> = {
  envKey: process.env.NEXT_PUBLIC_FLAGS_ENV_KEY!,

  // You can provide defaults flag values here
  defaultFlags: {},
};

export {
  type AppFlags,
  config,
};
