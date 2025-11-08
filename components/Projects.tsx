"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Rashford3D",
    description:
      "An end-to-end electronic e-commerce platform with product listings, cart functionality, authentication, and checkout flow. Includes product filters, reviews, and category pages.",
    category: "Web Development",
    tags: ["React", "TypeScript", "Tailwind CSS", "e-commerce"],
    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1753390318/WhatsApp_Image_2025-06-14_at_09.48.56_cd11a714_yobdik.jpg",
    completedDate: "On-going",
    technologies: [
      "React",
      "TypeScript",
      "Next",
      "PostgreSQL",
      "Cloudinary",
      "Tailwind CSS",
    ],
    id: 1,
    liveUrl: "https://rashford3-d.vercel.app/",
    githubUrl: "https://github.com/hagbazzinfo001/Rashford3D",
    featured: false,
    stats: { stars: 145, forks: 32, users: "10K+" },
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A sleek, multi-pages portfolio website tailored for a product manager, highlighting key projects, skills, certifications, and a professional journey. Optimized for fast load times and mobile experience.",
    category: "Web Development",

    tags: ["Portfolio", "Product Manager", "Guidelines"],
    image:
      "https://i.postimg.cc/m2BTQmhm/PHOTO-2025-05-13-11-10-54.jpg?auto=compress&cs=tinysrgb&w=800",

    completedDate: "2025-05-15",
    technologies: [
      "Next.js",
      "Figjam",
      "Tailwind CSS",
      "Figma",
      "Firestore",
      "Vercel",
      "TypeScript",
    ],
    challenges: "",

    featured: false,
    liveUrl: "https://afis-olanrewaju.vercel.app/",
    githubUrl: "https://github.com/hagbazzinfo001/Afis-olanrewaju",

    stats: { stars: 89, forks: 24, users: "5K+" },
  },
  {
    id: 3,
    title: "Goal-Tracker",
    description:
      "It is a personal Goal Tracker that helps users set, track, and achieve their goals with a touch of community support..",
    category: "Web Development",
    tags: [""],

    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    completedDate: "2025-09-18",
    technologies: ["Next.js", "Tailwind Css", "Framer Motion", "TypeScript"],

    featured: false,
    liveUrl: "https://goal-tracker-ebon.vercel.app/",
    githubUrl: "https://github.com/hagbazzinfo001/Goal-tracker",

    stats: { stars: 67, forks: 18, users: "2K+" },
  },
  {
    id: 4,
    title: "NGbooking Website (Clone)",
    description:
      "A responsive clone of a real-world hotel website featuring interactive booking forms, room showcases, image sliders, sign in & up page, and customer review sections. Built to demonstrate layout replication and user-centric UI design.",
    category: "Web Development",
    tags: ["Next.js", "Tailwind Css", "Hotel", "Performance"],
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    completedDate: "2025-06-05",
    technologies: ["Next.js", "API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://ngbooksinternship.vercel.app/",
    githubUrl: "https://github.com/hagbazzinfo001/ngbooksinternship",
    featured: false,
    stats: { stars: 234, forks: 56, users: "15K+" },
  },
  {
    id: 5,
    title: "Management System",
    description:
      "An application for Create and manage departments with roles and team members",
    category: "Web Development",

    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1757798283/Screenshot_124_stjosy.png",
    completedDate: "2025-08-30",
    duration: "3days",
    technologies: [
      "Next.js",
      "Tailwind css",
      "Javascript",
      "Vercel",
      "lucide-react",
    ],
    stats: { stars: 92, forks: 28, users: "3K+" },

    featured: false,
    liveUrl: "https://test-project-eta-mocha.vercel.app/",
    githubUrl: "https://github.com/hagbazzinfo001/testProject/",
  },
  {
    id: 6,
    title: "Cloud Infrastructure Automation",
    description:
      "Automated deployment of a web application on AWS EC2 instances using Ansible and NGINX, with an Application Load Balancer (ALB). Features dynamic HTML templates that display EC2 instance metadata (IP, hostname, and availability zone) via IMDSv2.",
    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1762563429/absiblwe_csb0fa.jpg?w=600&h=400&fit=crop",
    technologies: ["AWS", "Ansible", "NGINX", "", "Load Balancer"],
    liveUrl: "https://fitness-track.example.com",
    githubUrl: "",
    featured: true,
    stats: { stars: 92, forks: 28, users: "3K+" },
  },
  {
    id: 7,
    title: "multi-region provisioning and Infrastructure as Code (IaC)",
    description:
      " It demonstrates how to manage multi-region deployments, handle multiple providers, and output key information such as public IP addresses.",
    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1762563438/iac_atfong.png?w=600&h=400&fit=crop",
    technologies: ["AWS", "Terraform", "", "AMI"],
    liveUrl:
      "https://github.com/hagbazzinfo001/Multi-Region-EC2-Instance-Deployment-with-Terraform",
    githubUrl:
      "https://github.com/hagbazzinfo001/Multi-Region-EC2-Instance-Deployment-with-Terraform",
    featured: true,
    stats: { stars: 92, forks: 28, users: "3K+" },
  },
  {
    id: "8",
    title: "Eco-Shop",
    description:
      "An e-commerce frontend with a focus on vibrant UI, animated product showcases, and seamless browsing experience. Includes product carousal, nice color combination, and  well optimize images",
    category: "Web Development",
    tags: [""],

    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1753330904/Cover_cwq380.svg?auto=compress&cs=tinysrgb&w=800",
    completedDate: "2023-10-30",
    duration: "8 weeks",

    technologies: ["HTML5", "CSS", "Javascript", "Vercel"],
    challenges: "",
    outcome: "",
    featured: false,
    liveUrl: "https://ecosystem-seven.vercel.app/",
    githubUrl: "https://github.com/hagbazzinfo001/Ecosystem",
    stats: { stars: 92, forks: 28, users: "3K+" },
  },
  {
    id: 9,
    title: "DevOps Monitoring System",
    description:
      " Bash automation script to monitor system memory (RAM) usage on a Linux server, log the data hourly, and generate daily reports. ",
    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1762563438/mmm_uhjc4a.png?w=600&h=400&fit=crop",
    technologies: ["Linux Server", "Bash shell", "Postfix"],
    liveUrl:
      "https://github.com/hagbazzinfo001/System-Memory-Monitoring-and-Daily-Notification-Script",
    githubUrl:
      "https://github.com/hagbazzinfo001/System-Memory-Monitoring-and-Daily-Notification-Script",
    featured: true,
    stats: { stars: 92, forks: 28, users: "3K+" },
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work, demonstrating expertise across different
            technologies and domains
          </p>
        </motion.div>
        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Frontend Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="bg-white/90 text-gray-900 hover:bg-white"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          <Github className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-3 w-3 mr-1" />
                        {project.stats.stars}
                      </div>
                    </div>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 text-xs"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        View Live
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Featured Projects */}
        <div className="my-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Cloud/DeVops Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          {project.stats.stars}
                        </div>
                        <div>{project.stats.users} users</div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let &#39;s collaborate and bring your ideas to life with
                cutting-edge technology and creative solutions.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
