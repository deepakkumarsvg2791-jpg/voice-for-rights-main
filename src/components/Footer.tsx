import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  quickLinks: [
    "About HRSJ",
    "Chairperson",
    "Members",
    "Acts & Rules",
    "RTI",
  ],
  resources: [
    "Annual Reports",
    "Publications",
    "Press Releases",
    "Photo Gallery",
    "Video Gallery",
  ],
  help: [
    "How to File Complaint",
    "Check Status",
    "FAQ",
    "Contact Us",
    "Site Map",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">HRSJ</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Human Rights & Social Justice</h3>
                <p className="text-white/70 text-sm font-hindi">मानवाधिकार एवं सामाजिक न्याय</p>
              </div>
            </div>
            <p className="text-white/70 mb-4 text-sm max-w-md">
              Committed to protecting human dignity and rights of every citizen. 
              Working towards a just and equitable society.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">
                  New Delhi, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <p className="text-white/80 text-sm">+91-11-24651330</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <p className="text-white/80 text-sm">info@hrsj.org</p>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <p className="text-white/80 text-sm">www.hrsj.org</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-base mb-3">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-base mb-3">Help & Support</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-white/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Human Rights & Social Justice. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;