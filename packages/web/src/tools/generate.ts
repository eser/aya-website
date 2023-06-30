import { loadEnvConfig } from "@next/env";
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const getProjectDir = () => {
  const dir = new URL("../..", import.meta.url).pathname;

  return dir;
};

const generateCommand = () => {
  const projectRef = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF ?? "";

  const command: [string, string[]] = [
    "supabase",
    [
      "gen",
      "types",
      "typescript",
      "--project-id",
      projectRef,
      "--schema",
      "public",
    ],
  ];

  return command;
};

const executeCommand = (command: [string, string[]]) => {
  const output = execFileSync(...command, { encoding: "utf8" });

  return output;
};

const writeOutput = (filepath: string, output: string) => {
  writeFileSync(filepath, output);
};

const main = () => {
  const projectDir = getProjectDir();
  loadEnvConfig(projectDir);

  const command = generateCommand();
  const output = executeCommand(command);

  const target = join(projectDir, "src/shared/supabase/database-types.ts");

  writeOutput(target, output);

  const targetUserFriendly = relative(process.cwd(), target);

  // eslint-disable-next-line no-console
  console.log(`done. output written to ${targetUserFriendly}.`);
};

main();
