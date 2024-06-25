import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Offers from "@/components/Offers";
import OurObj from "@/components/ourObj";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <OurObj />
      <Offers />
      <Footer />
    </>
  );
}
