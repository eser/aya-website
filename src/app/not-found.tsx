import * as React from "react";

// FIXME(@eser) adding layout there breaks the entire site

// import { Layout } from "@/shared/components/layouts/default/layout.tsx";

const NotFoundPage = () => {
  // const placeholders: Record<string, string> = {
  //   // lang: props.params.lang,
  // };

  return (
    // <Layout placeholders={placeholders}>
    <section className="container mx-auto px-4 grid items-center">
      <h1>Not Found</h1>
    </section>
    // </Layout>
  );
};

export { NotFoundPage as default };
