import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

// Create 10 slides for each slider
const createSlides = (prefix: string) => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `${prefix} - Slide ${i + 1}`,
    image: heroImage,
  }));
};

const slides1 = createSlides("Slider 1");
const slides2 = createSlides("Slider 2");

// Reusable Slider Component
const ImageSlider = ({ 
  slides, 
  sliderId 
}: { 
  slides: Array<{ id: number; title: string; image: string }>; 
  sliderId: string;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Title */}
      <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 py-3 px-4">
        <div className="container mx-auto">
          <h2 className="text-white font-bold text-lg md:text-xl">
            {slides[currentSlide].title}
          </h2>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors z-10"
        aria-label={`Previous slide for ${sliderId}`}
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors z-10"
        aria-label={`Next slide for ${sliderId}`}
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 flex-wrap justify-center max-w-full px-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="pt-[140px] md:pt-[160px]">
      {/* Two Side-by-Side Image Sliders */}
      <div className="container mx-auto px-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Slider */}
          <div className="w-full">
            <ImageSlider slides={slides1} sliderId="slider1" />
          </div>
          
          {/* Second Slider */}
          <div className="w-full">
            <ImageSlider slides={slides2} sliderId="slider2" />
          </div>
        </div>
      </div>

      {/* News Ticker */}
      <div className="bg-primary py-2">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <span className="bg-white text-primary px-3 py-1 text-sm font-bold shrink-0">
            NEWS
          </span>
          <div className="overflow-hidden flex-1">
            <p className="text-white text-sm whitespace-nowrap animate-marquee">
              28th CAPF debate competition 2023 organized by NHRC & RPF on 15.12.2023 • Human Rights Day 2023 Celebration at Bharat Mandapam • Applications invited for vacancies on deputation
            </p>
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 text-xs shrink-0">
            More...
          </Button>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Lodge Complaint Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-card p-6 border border-border flex items-center gap-4 hover:shadow-elevated transition-shadow cursor-pointer"
          >
            <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Lodge Complaint /</h3>
              <p className="text-muted-foreground text-sm">Track Status Online</p>
            </div>
          </motion.div>

          {/* What's New Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-nhrc-green rounded-lg shadow-card p-6 text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            <h3 className="font-bold text-lg">Whats New</h3>
          </motion.div>

          {/* Press Release Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-nhrc-light-blue rounded-lg shadow-card p-6 text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            <h3 className="font-bold text-lg">Press Release</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;