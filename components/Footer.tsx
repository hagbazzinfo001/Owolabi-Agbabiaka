"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Linkedin,
  Github,
  Twitter,
  AtSign,
  //  Rss,
  // whatsapp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const services = [
  { label: "Cloud Computing", href: "#contact" },
  { label: "Web Development", href: "#contact" },
  { label: "SEO Optimization", href: "#contact" },
  { label: "Consulting", href: "#contact" },
];

const resources = [
  { label: "Blog", href: "#blog" },
  { label: "Case Studies", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Testimonials", href: "#testimonials" },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/owolabi-agbabiaka",
    color: "hover:text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/hagbazzinfo001",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: Twitter,
    label: "Twitter",
    url: "https://twitter.com/johnsmith",
    color: "hover:text-blue-400",
  },
  {
    icon: AtSign,
    label: "email",
    url: "mailto:owolabiagbabiaka@gmail.com",
    color: "hover:text-blue-500",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Owolabiagbabiaka@gmail.com",
    action: () => window.open("mailto:Owolabiagbabiaka@gmail.com", "_blank"),
  },
  {
    icon: Phone,
    label: "+234 904 987 3967",
    action: () => window.open("tel:+2349049873967", "_blank"),
  },
  {
    icon: MapPin,
    label: "Ikeja, Lagos State",
    action: () =>
      window.open("https://maps.google.com/?q=San+Francisco,CA", "_blank"),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2"
      >
        <Button
          onClick={scrollToTop}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>

      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Owolabi Agbabiaka</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Software developer passionate about creating exceptional digital
                experiences with modern technologies and innovative solutions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`text-gray-400 ${social.color} transition-colors duration-200`}
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <button
                    onClick={() => handleNavClick(service.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <button
                    onClick={() => handleNavClick(resource.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {resource.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Separator className="mb-8 bg-gray-700" />
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={info.action}
              >
                <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <info.icon className="h-4 w-4" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {info.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Separator className="mb-8 bg-gray-700" />
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new projects, blog posts, and tech
              insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                onClick={() => {
                  // Newsletter signup functionality
                  alert(
                    "Newsletter signup functionality would be implemented here!"
                  );
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Separator className="mb-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>
                © {new Date().getFullYear()} Owolabi Agbabiaka. All rights
                reserved.
              </span>
            </div>
            <div className="flex space-x-6">
              <button
                className="text-gray-400 hover:text-white text-sm transition-colors"
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center bg-green-900/20 text-green-400 px-4 py-2 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            Currently accepting new projects
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
