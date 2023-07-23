import { type PrismaClientType } from "../client.ts";

const seedProfileHex = async (
  prisma: PrismaClientType,
  languageTrCode: string,
) => {
  const now = new Date();

  const profileHex = await prisma.profile.upsert({
    where: { slug: "hex" },
    update: {},
    create: {
      type: "Product",
      slug: "hex",
      profilePictureUri:
        "https://alejxsvqroubkwwyfwdn.supabase.co/storage/v1/object/public/profile-pictures/hex.png",

      showStories: true,
      showMembers: true,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Hex",
              descriptionTx:
                "an ecosystem delivering practices, philosophy and portability",
            },
          ],
        },
      },
    },
  });

  const profileLinkWebsite = await prisma.profileLink.upsert({
    where: {
      profileId_slug: { profileId: profileHex.id, slug: "website" },
    },
    update: {},
    create: {
      profile: { connect: { id: profileHex.id } },
      slug: "website",
      uri: "https://hex.mod.land/",
      iconSet: null,
      iconKey: null,
      order: 1,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Website",
              descriptionTx: "Website",
            },
          ],
        },
      },
    },
  });

  const profilePageIndex = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileHex.id, slug: "index" } },
    update: {},
    create: {
      profile: { connect: { id: profileHex.id } },
      slug: "index",
      order: 1,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Bilgi",
              contentTx: `---
title: Bilgi
date: 2022-08-21
layout: default
---
✖️ **hex** is an ecosystem delivering practices, philosophy and portability.

hex consists of a set of **component**s that are designed to be used together.
These sub-components enable developers to abstract their codes for better
portability between platforms. Encourages ones to write codes once in functional
approach, then run on mainstream environments such as cli, bot platforms,
cloud-function runtimes and web apis.`,
            },
          ],
        },
      },
    },
  });

  const profilePageComponents = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileHex.id, slug: "components" } },
    update: {},
    create: {
      profile: { connect: { id: profileHex.id } },
      slug: "components",
      order: 2,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Bileşenler",
              contentTx: `---
title: Bileşenler
date: 2022-08-21
layout: default
---

|              Component              |       Area        |           Description            |
| ----------------------------------- | ----------------- | -------------------------------- |
| [Directives](src/lib/directives/)   | Rules             |                                  |
| [Standards](src/lib/standards/)     | Abstraction       |                                  |
| [FP](src/lib/fp/)                   | Functions Library | Tools for functional programming |
| [StdX](src/lib/stdx/)               | Functions Library | Encriched Standard Library       |
| [Data](src/lib/data/)               | Objects Library   | Data Objects and Patterns        |
| [Environment](src/lib/environment/) | Objects Library   | Environment adapters             |
| [Formatters](src/lib/formatters/)   | Objects Library   | Object serializers/deserializers |
| [CLI](src/lib/cli/)                 | Manager           | CLI library                      |
| [DI](src/lib/di/)                   | Manager           | Dependency injection library     |
| [Functions](src/lib/functions/)     | Manager           | Functions runtime                |
| [I18N](src/lib/i18n/)               | Manager           | Internationalization library     |
| [Options](src/lib/options/)         | Manager           | Configuration library            |

See the respective component page to figure out its specific usage.`,
            },
          ],
        },
      },
    },
  });

  const profilePageJumpstart = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileHex.id, slug: "jumpstart" } },
    update: {},
    create: {
      profile: { connect: { id: profileHex.id } },
      slug: "jumpstart",
      order: 3,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "Başlangıç",
              contentTx: `---
title: Başlangıç
date: 2022-08-21
layout: default
---

Ensure that [Deno](https://deno.land/) 1.27 or higher is installed on your
system first.

**Alternative I**:

Install hex cli globally first, then create a new project:

\`\`\`sh
$ deno run -A https://hexfw.deno.dev

$ hex create my-project

Creating "hex framework web template 0.0.1" on my-project...
...
done.
\`\`\`


**Alternative II**:

Without any preparation, invoke creating a new project remotely:

\`\`\`sh
$ deno run -A https://hexfw.deno.dev create my-project

Creating "hex framework web template 0.0.1" on my-project...
...
done.
\`\`\`


**Alternative III**:

Or run a hex routines directly from the resource:

\`\`\`sh
$ deno run https://deno.land/x/hex/samples/lib-functions/basic.ts eser

{ payload: "hello eser" }
\`\`\``,
            },
          ],
        },
      },
    },
  });

  const profilePageFaq = await prisma.profilePage.upsert({
    where: { profileId_slug: { profileId: profileHex.id, slug: "faq" } },
    update: {},
    create: {
      profile: { connect: { id: profileHex.id } },
      slug: "faq",
      order: 4,
      publishedAt: now,

      languages: {
        createMany: {
          data: [
            {
              languageCode: languageTrCode,
              titleTx: "SSS",
              contentTx: `---
title: SSS
date: 2022-08-21
layout: default
---

## Want to report a bug or request a feature?

Please read through our [CONTRIBUTING.md](CONTRIBUTING.md) and report it using
[GitHub Issues](https://github.com/eserozvataf/hex/issues)!


## Want to contribute?

It is publicly open for any contribution. Bugfixes, new features and extra
components are welcome.

Check out issues with the \`good first issue\` and \`help wanted\` label if you are
not sure how to begin. We suggest also looking at the closed ones to get a sense
of the kinds of issues you can tackle.

Fork the repo, push your changes to your fork, and submit a pull request.


## Requirements

- Deno 1.27 or higher (https://deno.land/)


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file.


## To Support

[Visit my GitHub Sponsors profile at github.com/sponsors/eserozvataf](https://github.com/sponsors/eserozvataf)`,
            },
          ],
        },
      },
    },
  });

  return {
    profileHex,
    profileLinkWebsite,
    profilePageIndex,
    profilePageComponents,
    profilePageFaq,
    profilePageJumpstart,
  };
};

export { seedProfileHex };
