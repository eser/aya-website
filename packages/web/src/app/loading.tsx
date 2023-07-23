import { Astronaut } from "@/shared/components/profiles/widgets/astronaut";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Astronaut />

      Yükleniyor...
    </div>
  );
};

export { Loading, Loading as default };
