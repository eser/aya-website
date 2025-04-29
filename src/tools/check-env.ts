import { loadEnvConfig } from "@next/env";
import { z } from "zod";
import process from "node:process";

const getProjectDir = () => {
  const dir = new URL("../..", import.meta.url).pathname;

  return dir;
};

const envSchema = z.object({
  NEXT_PUBLIC_REGISTRY_PROJECT_REF: z.string(),
  NEXT_PUBLIC_REGISTRY_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]).optional(),
});

const main = () => {
  const projectDir = getProjectDir();
  loadEnvConfig(projectDir);

  const env = envSchema.safeParse(process.env);

  if (!env.success) {
    // eslint-disable-next-line no-console
    console.error(
      "❌ Invalid environment variables:",
      JSON.stringify(env.error.format(), null, 4),
    );

    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log("done.");
};

main();
