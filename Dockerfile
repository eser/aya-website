FROM denoland/deno:2.2.12 AS base

# Rebuild the source code only when needed
FROM base AS builder

ENV NEXT_TELEMETRY_DISABLED=1
ENV DENO_DIR=./.deno_cache

WORKDIR /app

# Copy package.json and lockfile
COPY package.json deno.lock ./

# Install dependencies
RUN deno install

# Copy the rest of the application
COPY . ./

RUN deno run -A build

# Production image, copy all the files and run next
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV DENO_DIR=./.deno_cache

WORKDIR /app

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown deno:deno .next

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/app/api-reference/next-config-js/output
# COPY --from=builder --chown=deno:deno /app/.next/standalone ./
# COPY --from=builder --chown=deno:deno /app/.next/static ./.next/static
# COPY --from=builder --chown=deno:deno /app/public ./public
COPY --from=builder --chown=deno:deno /app/ ./

USER deno

EXPOSE 3000

ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
# CMD ["deno", "server.js"]

CMD ["deno", "run", "-A", "start"]
