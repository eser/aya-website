"use client"; // Error components must be Client components

import * as React from "react";

import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";
import { Button } from "@/shared/components/ui/button.tsx";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export function ErrorPage(props: ErrorPageProps) {
  const [reason, setReason] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(props.error);

    setReason(props.error.message);
  }, [props.error]);

  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container mx-auto">
        <h1>
          Bir hata oluştu
        </h1>

        {reason && (
          <p>
            {reason}
          </p>
        )}

        <Button
          variant="outline"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => props.reset()
          }
        >
          Yeniden dene
        </Button>
      </section>
    </PageLayout>
  );
}

export { ErrorPage as default };
