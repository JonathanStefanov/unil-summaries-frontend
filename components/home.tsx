import { Hero } from "./home/hero";
import { Features } from "./home/features";
export default function HomeComponent() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <center>
        <main className="flex-1">
          <Hero />
          <Features />
        </main>
      </center>
    </div>
  );
}
