import Hero from "./sections/Hero";
import System from "./sections/System";
import Exclusive from "./sections/Exclusive";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <System />
      <Exclusive />
    </main>
  );
}
