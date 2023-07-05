"use client"; // Error components must be Client components

import { useEffect } from "react";
import { Layout } from "@/shared/components/layout.tsx";
import { Button } from "@/shared/components/ui/button.tsx";

const Error = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1>
            Bir hata oluştu
          </h1>

          <div className="max-w-[980px] text-lg sm:text-xl">
            <Button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Yeniden dene
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { Error, Error as default };
