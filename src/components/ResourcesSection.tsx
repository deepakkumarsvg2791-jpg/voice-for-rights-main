import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Image, Film, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const photoGalleryItems = [
  { id: 1, title: "Event 1" },
  { id: 2, title: "Event 2" },
  { id: 3, title: "Event 3" },
];

const filmGalleryItems = [
  { id: 1, title: "Little Doll", duration: "1:08" },
  { id: 2, title: "NHRC Composite (in English)", duration: "2:30" },
];

const ResourcesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="gallery" className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Photo Gallery */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between p-3 bg-secondary text-white">
                <h3 className="font-semibold flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  Photo Gallery
                </h3>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 text-xs">
                  View All
                </Button>
              </div>
              <div className="relative aspect-video bg-foreground flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button className="relative z-10 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Play className="w-6 h-6 text-white fill-white" />
                </button>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-white text-xs">
                  <span>0:26 / 1:08</span>
                  <div className="flex gap-2">
                    <button className="hover:opacity-80">⚙️</button>
                    <button className="hover:opacity-80">🔊</button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Photo Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="aspect-square bg-muted overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Image className="w-8 h-8 text-muted-foreground" />
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Film Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden h-full">
              <div className="flex items-center justify-between p-3 bg-muted border-b">
                <Button variant="outline" size="sm" className="text-xs">
                  FILM GALLERY
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  VIEW ALL
                </Button>
              </div>
              <div className="p-4 space-y-4">
                {filmGalleryItems.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="relative aspect-video bg-foreground rounded-lg overflow-hidden mb-2">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <Play className="w-5 h-5 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;