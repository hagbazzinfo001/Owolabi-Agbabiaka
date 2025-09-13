"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Coffee, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Code, label: "Projects Completed", value: 30, suffix: "+" },
  // { icon: Coffee, label: "Cups of Coffee", value: 1000, suffix: "+" },
  { icon: Users, label: "Happy Clients", value: 20, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 2, suffix: "+" },
];

function CountingNumber({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
      className="text-2xl font-bold text-gray-900 dark:text-white"
    >
      {count}
      {suffix}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.postimg.cc/yxwg4krP/IMG-0667-removebg.png"
              alt="About me"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Building Digital Solutions with Purpose
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a Cloud/Devops Engineer with a strong foundation in Frontend
              Development. After earning my first degree from Lagos State
              University, I transitioned into tech to pursue my passion for
              innovation and problem-solving. My journey started with frontend
              development, crafting user interfaces, and has evolved into
              deploying cloud-native solutions that power modern applications.
              My goal is to work with forward-thinking teams, contribute to
              impactful products, and keep learning in the ever-evolving tech
              space.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building scalable cloud solutions and build
              interactive web experiences, but I&#39;m always exploring new
              technologies. When I&#39;m not coding, you&#39;ll find me
              contributing to open-source projects, writing technical articles,
              or mentoring aspiring developers.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-2">
                      {
                        <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      }
                      <CountingNumber
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2000}
                      />
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
