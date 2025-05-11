import * as React from "react";

// FIXME(@eser) adding layout there breaks the entire site

// import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";

export function NotFoundPage() {
  // const placeholders: Record<string, string> = {
  //   // locale: props.params.locale,
  // };

  return (
    // <PageLayout placeholders={placeholders}>
    <section className="container mx-auto px-4 py-10 grid items-center">
      <h1>Sayfa bulunamadı</h1>
    </section>
    // </PageLayout>
  );
}

export { NotFoundPage as default };
