import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/header";
import TrainSearch from "@/components/train-search";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="space-y-4">
      <Header />
      <TrainSearch />
    </div>
  );
}
