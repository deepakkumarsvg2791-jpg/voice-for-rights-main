import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Users, Image, Download, Phone, UserPlus, LogIn, Search, Type, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About Us", href: "#about", icon: Users },
  { name: "Gallery", href: "#gallery", icon: Image },
  { name: "Download", href: "#download", icon: Download },
  { name: "Contact", href: "#contact", icon: Phone },
  { name: "Apply Membership", href: "#membership", icon: UserPlus },
  { name: "Login", href: "#login", icon: LogIn },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-8 gap-4 text-xs text-muted-foreground">
            <span>SKIP TO MAIN CONTENT</span>
            <button className="hover:text-primary transition-colors">
              <Search className="w-3.5 h-3.5" />
            </button>
            <button className="hover:text-primary transition-colors flex items-center gap-1">
              <Type className="w-3.5 h-3.5" />
              <span>Ty</span>
            </button>
            <button className="hover:text-primary transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              <span>Language</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header with Logo */}
      <div className="header-gradient">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left Emblem */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/30">
                <span className="text-white font-bold text-sm">HRSJ</span>
              </div>
            </div>

            {/* Center Logo & Title */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-white text-xs font-bold">HRSJ</span>
                </div>
              </div>
              <div className="hidden sm:block text-center">
                <h1 className="text-white font-bold text-lg md:text-xl tracking-wide">
                  HUMAN RIGHTS & SOCIAL JUSTICE
                </h1>
                <p className="text-white/80 text-sm font-hindi">
                  मानवाधिकार एवं सामाजिक न्याय
                </p>
              </div>
            </motion.div>

            {/* Right Emblem */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/30 overflow-hidden">
                <span className="text-white font-bold text-xs">EMBLEM</span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:block bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-12 gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 text-white/90 hover:bg-white/10 transition-colors text-sm font-medium rounded"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 py-3 text-white/90 hover:text-white transition-colors font-medium border-b border-white/10 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;