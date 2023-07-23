import { Astronaut } from "@/shared/components/profiles/widgets/astronaut.tsx";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Astronaut width={400} height={400} />

      Yükleniyor...
    </div>
  );
};

export { Loading, Loading as default };
