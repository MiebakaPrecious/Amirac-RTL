import Header from "@/components/Header";
import HeroNew from "@/components/HeroNew";
import AboutPreview from "@/components/AboutPreview";
import TrainingHighlight from "@/components/TrainingHighlight";
import ServicesPreview from "@/components/ServicesPreview";
import GalleryPreview from "@/components/GalleryPreview";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroNew />
        <AboutPreview />
        <TrainingHighlight />
        <ServicesPreview />
        <GalleryPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
