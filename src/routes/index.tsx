import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/header";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
    </div>
  );
}
