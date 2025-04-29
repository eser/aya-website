import * as React from "react";

import { Astronaut } from "@/shared/components/widgets/astronaut/astronaut.tsx";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Astronaut width={400} height={400} />

      Yükleniyor...
    </div>
  );
};

export { Loading as default };
