import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Reserve from "@/components/Reserve";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-fg">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Reserve />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

