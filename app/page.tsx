import { Header } from "@/app-logic/modules/principal-landing/components/Header";
import { Hero } from "@/app-logic/modules/principal-landing/components/hero";
import { WhoWeAre } from "@/app-logic/modules/principal-landing/components/whoWeAre";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <Header />
      <Hero />
      <WhoWeAre />
    </div>
  );
}
