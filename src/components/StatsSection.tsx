import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, Heart, Shield, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { value: 4996, label: "fresh cases received", color: "text-nhrc-green" },
  { value: 4993, label: "cases disposed (Fresh + Old)", color: "text-nhrc-light-blue" },
  { value: 7266, label: "cases under consideration (Fresh + Old)", color: "text-primary" },
  { value: 60854, label: "cases received", sublabel: "Current Year (FY 2023-24)", color: "text-secondary" },
];

const pieData = [
  { label: "17.8%", color: "#1e40af" },
  { label: "36.3%", color: "#dc2626" },
  { label: "10.5%", color: "#16a34a" },
  { label: "20.5%", color: "#f59e0b" },
  { label: "5.4%", color: "#8b5cf6" },
  { label: "3.5%", color: "#06b6d4" },
];

const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// Content slides for text/news slider
const textContentSlides = [
  {
    id: 1,
    headline: "बक्सर पत्रिका :",
    content: "ठंड का कहर जिले में जारी है। इस ठंड के मौसम में मानवाधिकार एवम सामाजिक न्याय के बक्सर इकाई के द्वारा डुमरांव में कंबल वितरित किया गया। नगर के रेलवे स्टेशन पर सौ की संख्या में कंबल वितरित किया गया। कार्यक्रम के नोडल अधिकारी नसीर हुसैन ने सदस्यों के साथ स्टेशन पर सभी को कंबल वितरित किया। मानवाधिकार एवम सामाजिक न्याय के जिलाध्यक्ष डॉ दिलशाद आलम ने",
  },
  {
    id: 2,
    headline: "समाचार :",
    content: "मानवाधिकार दिवस 2023 का उत्सव भारत मंडपम में मनाया गया। इस अवसर पर विभिन्न कार्यक्रम आयोजित किए गए और मानवाधिकारों के संरक्षण पर चर्चा की गई।",
  },
  {
    id: 3,
    headline: "अपडेट :",
    content: "28वीं CAPF बहस प्रतियोगिता 2023 का आयोजन NHRC और RPF द्वारा 15.12.2023 को किया गया। इस प्रतियोगिता में कई टीमों ने भाग लिया।",
  },
  {
    id: 4,
    headline: "सूचना :",
    content: "डिपुटेशन पर रिक्तियों के लिए आवेदन आमंत्रित किए गए हैं। इच्छुक उम्मीदवार आधिकारिक वेबसाइट पर आवेदन कर सकते हैं।",
  },
];

// Icon content slides
const iconContentSlides = [
  {
    id: 1,
    icon: Users,
    hindiText: "मानवाधिकार एवं सामाजिक न्याय",
    englishText: "HUMAN RIGHTS & SOCIAL JUSTICE",
  },
  {
    id: 2,
    icon: Heart,
    hindiText: "सामाजिक कल्याण",
    englishText: "SOCIAL WELFARE",
  },
  {
    id: 3,
    icon: Shield,
    hindiText: "नागरिक सुरक्षा",
    englishText: "CIVIL PROTECTION",
  },
  {
    id: 4,
    icon: Scale,
    hindiText: "न्याय और समानता",
    englishText: "JUSTICE & EQUALITY",
  },
];

// Text Content Slider Component
const TextContentSlider = ({ 
  slides, 
  sliderId 
}: { 
  slides: Array<{ id: number; headline: string; content: string }>; 
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
    <Card className="border-2 border-red-500 rounded-lg overflow-hidden bg-white">
      <div className="relative min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <p className="text-foreground font-hindi text-base leading-relaxed">
              <span className="text-red-600 font-bold">{slides[currentSlide].headline}</span> {slides[currentSlide].content}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors z-10"
          aria-label={`Previous slide for ${sliderId}`}
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors z-10"
          aria-label={`Next slide for ${sliderId}`}
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 py-3 bg-gray-100">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Card>
  );
};

// Icon Content Slider Component
const IconContentSlider = ({ 
  slides, 
  sliderId 
}: { 
  slides: Array<{ id: number; icon: any; hindiText: string; englishText: string }>; 
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

  const IconComponent = slides[currentSlide].icon;

  return (
    <Card className="border-2 border-red-500 rounded-lg overflow-hidden bg-white h-full">
      <div className="relative min-h-[250px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="text-center p-6 w-full"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <IconComponent className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-500 text-sm mb-2">
              {slides[currentSlide].hindiText}
            </p>
            <p className="text-gray-800 font-bold text-lg">
              {slides[currentSlide].englishText}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors z-10"
          aria-label={`Previous slide for ${sliderId}`}
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors z-10"
          aria-label={`Next slide for ${sliderId}`}
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 py-3 bg-gray-100">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Card>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="statistics" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl font-bold text-center text-foreground mb-8"
        >
          Complaints Statistics
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="text-sm text-muted-foreground text-center mb-4">
                Incident-wise number of cases registered during 2022
              </h3>
              <div className="relative w-48 h-48 mx-auto">
                {/* Simple Pie Chart Visualization */}
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#dc2626" strokeWidth="20" strokeDasharray="75.4 251.2" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1e40af" strokeWidth="20" strokeDasharray="44.8 251.2" strokeDashoffset="-75.4" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#16a34a" strokeWidth="20" strokeDasharray="26.4 251.2" strokeDashoffset="-120.2" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="20" strokeDasharray="51.6 251.2" strokeDashoffset="-146.6" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="13.6 251.2" strokeDashoffset="-198.2" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#06b6d4" strokeWidth="20" strokeDasharray="8.8 251.2" strokeDashoffset="-211.8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">2022</span>
                </div>
              </div>
              {/* Legend */}
              <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Stats Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="text-nhrc-green font-semibold">Cases received / processed</h3>
                <p className="text-sm text-muted-foreground">
                  December, 2023 (As per an early estimate)
                </p>
              </div>

              <div className="space-y-4">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="flex items-baseline gap-4">
                    <span className={`text-2xl font-bold ${stat.color}`}>
                      <AnimatedNumber value={stat.value} />
                    </span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  {stats[3].sublabel}
                </p>
                <div className="flex items-baseline gap-4">
                  <span className={`text-3xl font-bold ${stats[3].color}`}>
                    <AnimatedNumber value={stats[3].value} />
                  </span>
                  <span className="text-sm text-muted-foreground">{stats[3].label}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Two Side-by-Side Content Sliders */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Text Content Slider */}
            <div className="w-full">
              <TextContentSlider slides={textContentSlides} sliderId="textSlider" />
            </div>
            
            {/* Icon Content Slider */}
            <div className="w-full">
              <IconContentSlider slides={iconContentSlides} sliderId="iconSlider" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;