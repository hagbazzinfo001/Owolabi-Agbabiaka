"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://i.postimg.cc/yxwg4krP/IMG-0667-removebg.png"
            alt="John Smith"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hi, I&#39;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Owolabi Agbabiaka
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Cloud Engineer | Frontend Developer | Tech Enthusiast <br /> I
            design scalable cloud solutions and build interactive web
            experiences. Passionate about solving problems with technology and
            creating meaningful impact.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="mr-2 h-5 w-5" />
              Let&#39;s Work Together
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3"
              // ...existing code...
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/CV-Agbabiaka Hammed..pdf"; // make sure this file exists in the /public folder
                link.download = "CV - Hammed Agbabiaka.pdf";
                document.body.appendChild(link); // Append first
                link.click(); // Trigger the download
                document.body.removeChild(link); // Then clean up
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ArrowDown
              className="mx-auto h-6 w-6 text-gray-400 cursor-pointer"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
