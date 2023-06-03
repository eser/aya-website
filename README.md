# next-template

A Next.js 13 template for building apps with Radix UI and Tailwind CSS.

## Features

- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`

## Tailwind CSS Features

- Class merging with `taiwind-merge`
- Animation with `tailwindcss-animate`
- Conditional classes with `clsx`
- Variants with `class-variance-authority`
- Automatic class sorting with `eslint-plugin-tailwindcss`

### Input

```tsx
import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/shared/config/site.ts";
import { buttonVariants } from "@/shared/components/ui/button";
import { twMerge } from "tailwind-merge";

import { type NavItem } from "@/shared/config/nav";
import { cn } from "@/shared/lib/utils";
```

### Output

```tsx
import * as React from "react";
// React is always first.
import Link from "next/link";
// Followed by next modules.
import { twMerge } from "tailwind-merge";

// Followed by third-party modules
// Space
import { type NavItem } from "@/shared/config/nav.ts";
// types
import { siteConfig } from "@/shared/config/site.ts";
// config
import { cn } from "@/shared/lib/utils.ts";
// lib
import { buttonVariants } from "@/shared/components/ui/button";

// components
```

### Class Merging

The `cn` util handles conditional classes and class merging.

### Input

```ts
cn("px-2 bg-slate-100 py-2 bg-slate-200");
// Outputs `p-2 bg-slate-200`
```

## License

Licensed under the
[MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
