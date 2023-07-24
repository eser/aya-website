# AYA - Open Source Network
[![Discord](https://img.shields.io/discord/1072074800622739476?color=7289da&logo=discord&logoColor=white)](https://discord.gg/itdepremyardim)
[![GitHub issues](https://img.shields.io/github/issues/acikkaynak/aya-website)](https://github.com/acikkaynak/aya-website/issues)


(For Turkish please click [here](README.md))

We are a close-knit and passionate community of individuals who share a common interest in open source software and open source data. United by our dedication to leveraging technology for the betterment of society, we joined forces following the devastating [February 2023 earthquake](https://en.wikipedia.org/wiki/2023_Turkey%E2%80%93Syria_earthquake) in Turkey.

In the aftermath of the earthquake, we recognized the pressing need to support those affected and assist in the process of reuniting families and loved ones. With this purpose in mind, we set out to develop innovative tools and solutions aimed at facilitating the search and connection between individuals.

Through tireless collaboration and a collective effort, our community has grown to an inspiring size of 24,000 individuals. Together, we continue to refine and expand our tools, harnessing the power of technology to help reunite families, restore hope, and bring solace to those impacted by the earthquake.

As we forge ahead, our commitment remains unwavering. We strive to enhance our tools, actively contribute to open source projects, and foster a supportive environment where knowledge sharing and collaboration thrive. We are proud to be a part of the open source community and look forward to continuing our journey with you.

## Our Mission

We are actively engaged in utilizing open-source solutions, applying information systems, and implementing engineering practices to contribute to the betterment of the society we reside in. Our primary focus lies in fulfilling social responsibility needs and addressing various societal challenges through these means. By leveraging our expertise and resources, we strive to make a positive impact and foster sustainable development within our community.

## Technology

These are the technologies we use to build our projects:

For Frontend:
- [Next.js](https://nextjs.org)
- [Shadcn](https://shadcn/ui)
- [Supabase](https://supabase.io)
- [Vercel](https://vercel.com)

For Backend:
- [Supabase](https://supabase.io)
- [Prisma](https://prisma.io)

Prerequisites:
- [Deno](https://deno.land) (recommended v1.35.2)
- [Node.js](https://nodejs.org) (recommended v19.0.0)
- [PNPM](https://pnpm.io/) (recommended v8.6.10)
- [Git](https://git-scm.com/) (recommended v2.41.0)

## Setting Up the Project

Clone the GitHub repository:

```bash
$ git clone git@github.com:acikkaynak/aya-website.git
```

Navigate to the project directory:

```bash
$ cd aya-website
```

Install necessary packages:

```bash
$ pnpm install
```

Go to the API folder and configure Supabase:

```bash
$ cd packages/api
$ pnpx supabase start

Started supabase local development setup.

         API URL: http://localhost:54321
     GraphQL URL: http://localhost:54321/graphql/v1
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: aaa.bbb.ccc_ddd0
service_role key: xxx.yyy.zzz-www

```

Copy the `.env` files in both `packages/api` and `packages/web` directories as `.env.local` and make the necessary changes.

While you're still in `packages/api` directory, initialize the database and load some example data:

```bash
$ pnpm db:generate:proxy
$ pnpm db:generate
$ pnpm db:push
$ pnpm db:seed
```

Lastly, go back to project root and start project in development mode:

```bash
$ cd ../..
$ pnpm dev
```


## Project Management

Currently, we do not have a management panel for the project. For this reason, we perform operations through the CLI. If `deno` is installed on your system, you can access the CLI through the following commands:

```bash
$ cd packages/api
$ deno task cli
```

You can access `env` and `supabase` objects through the CLI.

### Examples:

Getting a profile:

```js
await profileGet(supabase, "eser", "tr");
```


## How to Contribute

We welcome contributions from everyone. To start please [read our contributing guide](CONTRIBUTING.en.md). If you want to help you can check out our [issues](https://github.com/acikkaynak/aya-website/issues). If you have any questions, feel free to join our [Discord server](https://discord.gg/itdepremyardim). If you are stuck at any point, feel free to ask for help on GitHub Issues or Discord.


## License

Apache 2.0, see [LICENSE](LICENSE) file for details.
