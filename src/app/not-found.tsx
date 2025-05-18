import * as React from "react";

// FIXME(@eser) adding layout there breaks the entire site

// import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";

export function NotFoundPage() {
  // const placeholders: Record<string, string> = {
  //   // locale: props.params.locale,
  // };

  return (
    // <PageLayout placeholders={placeholders}>
    <section className="container px-4 py-8 mx-auto">
      <div className="content">
        <h2>Sayfa bulunamadı</h2>

        <p>
          Bu sayfa mevcut değil. Yazım yanlışı varsa lütfen tekrar kontrol ediniz.
        </p>
      </div>
    </section>
    // </PageLayout>
  );
}

export { NotFoundPage as default };
