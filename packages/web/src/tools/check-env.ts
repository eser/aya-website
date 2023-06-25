import { loadEnvConfig } from "@next/env";
import { z } from "zod";
import { join } from "node:path";

const getProjectDir = () => {
  return join(__dirname, "../..");
};

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_PROJECT_REF: z.string(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  NODE_ENV: z.enum(["development", "test", "production"]).optional(),
});

const main = async () => {
  const projectDir = getProjectDir();
  loadEnvConfig(projectDir);

  const env = envSchema.safeParse(process.env);

  if (!env.success) {
    console.error(
      "❌ Invalid environment variables:",
      JSON.stringify(env.error.format(), null, 4),
    );

    process.exit(1);
  }

  console.log("done.");
};

main();
