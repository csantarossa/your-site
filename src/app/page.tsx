import Hero from "./components/Hero";
import Services from "./components/Services";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen w-full font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
}
