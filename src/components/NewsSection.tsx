import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Users, Search, HardHat, CheckCircle, ClipboardCheck, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const awardItems = [
  { 
    icon: Search, 
    title: "Indian Doctors Pride Award -2024",
    bgColor: "bg-[#8B2E5C]",
    isActive: false
  },
  { 
    icon: HardHat, 
    title: "Rashtriya Chikitsa Sewa Samman - 2024",
    bgColor: "bg-[#556B2F]",
    isActive: false
  },
  { 
    icon: CheckCircle, 
    title: "5 Star Ranking Business Award 2024",
    bgColor: "bg-[#8B4513]",
    isActive: false
  },
  { 
    icon: ClipboardCheck, 
    title: "Dr. Sharvapalli Radhakrishnan Shiksha Ratna Samman -2024",
    bgColor: "bg-yellow-500",
    isActive: true
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedAward, setSelectedAward] = useState(0);

  return (
    <section id="news" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Awards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Awards List - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2"
          >
            {awardItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedAward(index)}
                className={`flex items-center gap-0 ${item.bgColor} text-white rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-[1.02] ${
                  selectedAward === index ? 'ring-2 ring-yellow-400 ring-offset-2' : ''
                }`}
              >
                {/* Icon Square */}
                <div className={`w-16 h-16 ${item.bgColor} flex items-center justify-center shrink-0`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                {/* Title */}
                <div className="flex-1 px-4 py-4">
                  <span className="text-sm font-bold leading-tight">{item.title}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Award Banner - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="overflow-hidden h-full">
              {/* Gradient Background with Sparkles */}
              <div className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 p-6 min-h-[600px]">
                {/* Sparkle Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>

                {/* India Map Outline (subtle) */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-32 h-32 text-white">
                    <path d="M50 10 L60 20 L70 15 L75 25 L80 20 L85 30 L70 40 L65 50 L60 45 L55 55 L50 60 L45 55 L40 65 L35 60 L30 70 L25 65 L20 75 L15 70 L10 80 L15 75 L20 85 L25 80 L30 90 L35 85 L40 95 L45 90 L50 85 Z" 
                          fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>

                {/* Top Badges */}
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-red-500 font-bold text-xs">NATIONAL AWARD</span>
                  </div>
                  <div className="bg-blue-600 px-4 py-2 rounded-full">
                    <span className="text-white font-bold text-xs">Congratulation</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                  {/* Trophy and Title Section */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Trophy Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                        <Trophy className="w-16 h-16 text-yellow-900" />
                      </div>
                      <div className="mt-2 bg-black/50 px-2 py-1 rounded text-center">
                        <span className="text-white text-[8px] font-bold">INDIAN DOCTORS PRIDE AWARD 2024</span>
                      </div>
                    </div>

                    {/* Main Title */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                        <span className="text-green-400">INDIAN</span>{' '}
                        <span className="text-white">DOCTORS PRIDE</span>{' '}
                        <span className="text-yellow-400">AWARD-2024</span>
                      </h2>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="bg-yellow-400/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <p className="text-yellow-300 text-sm font-semibold mb-1">
                      Date - 28 August 2024 | Time- 11:00 AM
                    </p>
                    <p className="text-yellow-300 text-sm font-semibold">
                      Venue : The Emerald, Mumbai, Maharashtra
                    </p>
                  </div>

                  {/* Recipient Section */}
                  <div className="flex gap-4 mb-6">
                    {/* Photo Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-40 bg-gray-300 rounded-lg relative overflow-hidden border-4 border-yellow-400">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                          <Users className="w-16 h-16 text-gray-700" />
                        </div>
                        {/* Approved Badge */}
                        <div className="absolute top-2 right-2 bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-white text-[8px] font-bold">✓</span>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-green-500/80 px-2 py-1 rounded">
                          <span className="text-white text-[8px] font-bold">APPROVED</span>
                        </div>
                      </div>
                    </div>

                    {/* Recipient Details */}
                    <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-white font-bold text-lg mb-2">Dr. Abjad Karimi</h3>
                      <div className="space-y-1 text-white text-sm">
                        <p>MBBD (Gold Medalist)</p>
                        <p>MS (General Surgery)</p>
                        <p>Mch Neurosurgery</p>
                        <p>Senior Resident</p>
                        <p>Trauma Center IMS BHU Varanasi</p>
                        <p>Uttar Pradesh</p>
                      </div>
                    </div>
                  </div>

                  {/* Organizer Section */}
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-orange-400 text-sm font-semibold">Organised by:</span>
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <span className="text-white text-xs font-bold">HUMAN RIGHTS & SOCIAL JUSTICE</span>
                    </div>
                    <p className="text-white text-xs mb-3">
                      Mob-9631068274 | Email - hrsjindia2019@gmail.com
                    </p>
                    
                    {/* Partners */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-white/80">Managed by</span>
                        <div className="bg-white/20 px-2 py-1 rounded text-white font-bold">ROYAL</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/80">Brand Partner</span>
                        <div className="bg-white/20 px-2 py-1 rounded text-white font-bold">B</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/80">Survey Authority</span>
                        <div className="bg-white/20 px-2 py-1 rounded text-white text-[10px]">PUBLIC WELFARE GROUP</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/80">Media Partner</span>
                        <div className="bg-white/20 px-2 py-1 rounded text-white font-bold">M</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;