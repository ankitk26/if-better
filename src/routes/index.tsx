import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/header";
import Holidays from "@/components/holidays";
import OtherServices from "@/components/other-services";
import TrainSearch from "@/components/train-search";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="space-y-4">
      <Header />
      <TrainSearch />
      <section className="mx-auto mt-20 w-11/12 lg:w-3/5">
        <OtherServices />
      </section>
      <section className="mx-auto mt-40 w-11/12 lg:w-3/5">
        <Holidays />
      </section>
    </div>
  );
}
