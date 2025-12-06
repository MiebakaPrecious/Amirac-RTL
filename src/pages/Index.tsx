import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <CTABanner />
        <Process />
        <Projects />
        <Quote />
        <Testimonials />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
