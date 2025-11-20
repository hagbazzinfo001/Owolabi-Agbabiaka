"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Coffee, Users, Award } from "lucide-react";
import { FaAws, FaDocker, FaReact, FaGithub, FaNode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiNginx,
  SiKubernetes,
  SiTerraform,
  SiApache,
  SiTypescript,
} from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const skills = [
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-white",
  },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-white" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Nginx", icon: SiNginx, color: "text-green-600" },
  { name: "Apache", icon: SiApache, color: "text-black-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
];

const stats = [
  { icon: Code, label: "Projects Completed", value: 30, suffix: "+" },
  // { icon: Coffee, label: "Cups of Coffee", value: 1000, suffix: "+" },
  { icon: Users, label: "Happy Clients", value: 20, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 2, suffix: "+" },
];
export default function Skills() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 mt-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center ">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <skill.icon className={`w-12 h-12 mb-3 ${skill.color}`} />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
