"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2349049873965", "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300"
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </motion.button>
  );
}
