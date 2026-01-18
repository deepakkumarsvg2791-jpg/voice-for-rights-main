import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";
import ComplaintSection from "@/components/ComplaintSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <NewsSection />
        <ComplaintSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
