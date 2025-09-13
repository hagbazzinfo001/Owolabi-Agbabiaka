"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  BookOpen,
  ExternalLink,
  Download,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const education = [
  {
    id: 1,
    type: "Diploma",
    title: "Diploma Degree in Cloud Engineering",
    institution: "AltSchool Africa",
    location: "Africa",
    period: "2025- 2026",
    description:
      "Comprehensive study of software development methodologies, algorithms, Cloud Infrastructure, CI/CD Pipeline and system design.",
    // gpa: "3.8/4.0",
    // honors: ["Summa Cum Laude", "Outstanding Student Award"],
    logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    type: "degree",
    title: "Bachelor of Science",
    institution: "Lagos State University",
    location: "Lagos State, Nigeria",
    period: "2019 - 2024",
    // description: 'Specialized in Machine Learning and Distributed Systems. Thesis on "Optimizing Real-time Data Processing in Cloud Environments".',
    // gpa: '3/4.0',
    // honors: ["Magna Cum Laude", "Dean's List"],
    logo: "data:image/jpeg;base64,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",
  },
];

const certifications = [
  {
    id: 1,
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAP-2023-001234",
    verifyUrl: "https://aws.amazon.com/verification",
    logo: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=60&h=60&fit=crop",
    skills: ["Cloud Architecture", "AWS Services", "DevOps", "Security"],
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-5678",
    verifyUrl: "https://cloud.google.com/certification/verification",
    logo: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=60&h=60&fit=crop",
    skills: ["GCP Services", "Kubernetes", "Container Orchestration"],
  },
  {
    id: 3,
    title: "React Advanced Certification",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-REACT-2022-9012",
    verifyUrl: "https://developers.facebook.com/certification/verification",
    logo: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=60&h=60&fit=crop",
    skills: ["React", "Redux", "Testing", "Performance Optimization"],
  },
  {
    id: 4,
    title: "Node.js Application Developer",
    issuer: "Node.js Foundation",
    date: "2022",
    credentialId: "NODE-AD-2022-3456",
    verifyUrl: "https://nodejs.org/certification/verification",
    logo: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=60&h=60&fit=crop",
    skills: [
      "Node.js",
      "Express.js",
      "Database Integration",
      "API Development",
    ],
  },
];

const courses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    provider: "Frontend Masters",
    date: "2023",
    duration: "8 hours",
    certificate: true,
    topics: [
      "Higher-Order Components",
      "Render Props",
      "Hooks Patterns",
      "Context API",
    ],
  },
  {
    id: 2,
    title: "Microservices Architecture",
    provider: "Coursera - IBM",
    date: "2023",
    duration: "6 weeks",
    certificate: true,
    topics: [
      "Service Design",
      "API Gateway",
      "Container Orchestration",
      "Monitoring",
    ],
  },
  {
    id: 3,
    title: "Machine Learning Engineering",
    provider: "Udacity",
    date: "2022",
    duration: "4 months",
    certificate: true,
    topics: ["MLOps", "Model Deployment", "Data Pipeline", "A/B Testing"],
  },
  {
    id: 4,
    title: "TypeScript Deep Dive",
    provider: "Pluralsight",
    date: "2022",
    duration: "12 hours",
    certificate: true,
    topics: ["Advanced Types", "Generics", "Decorators", "Module System"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development through formal
            education and industry certifications
          </p>
        </motion.div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <CardTitle className="text-xl text-gray-900 dark:text-white">
                              {edu.title}
                            </CardTitle>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {edu.period}
                            </div>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                            <BookOpen className="h-4 w-4 mr-2" />
                            {edu.institution}
                            <MapPin className="h-4 w-4 ml-4 mr-1" />
                            {edu.location}
                          </div>
                          {/* {edu.gpa && (
                            <div className="text-sm text-gray-500 mb-2">
                              GPA:{" "}
                              <span className="font-semibold">{edu.gpa}</span>
                            </div>
                          )} */}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {edu.description}
                      </CardDescription>
                      {/* {edu.honors && edu.honors.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor) => (
                            <Badge
                              key={honor}
                              className="bg-blue-100 text-blue-800"
                            >
                              <Award className="h-3 w-3 mr-1" />
                              {honor}
                            </Badge>
                          ))}
                        </div>
                      )} */}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-3">
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">
                            {cert.title}
                          </CardTitle>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {cert.issuer} • {cert.date}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-sm text-gray-500">
                          <strong>Credential ID:</strong> {cert.credentialId}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                            onClick={() =>
                              window.open(cert.verifyUrl, "_blank")
                            }
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Verify
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => {
                              // Simulate certificate download
                              const link = document.createElement("a");
                              link.href = "#";
                              link.download = `${cert.title
                                .replace(/\s+/g, "-")
                                .toLowerCase()}-certificate.pdf`;
                              link.click();
                            }}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg">
                          {course.title}
                        </CardTitle>
                        {course.certificate && (
                          <Badge className="bg-green-100 text-green-800">
                            Certified
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {course.provider} • {course.date}
                      </div>
                      <div className="text-sm text-gray-500">
                        Duration: {course.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                            Topics Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {course.topics.map((topic) => (
                              <Badge
                                key={topic}
                                variant="outline"
                                className="text-xs"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {course.certificate && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full"
                            onClick={() => {
                              // Simulate certificate download
                              const link = document.createElement("a");
                              link.href = "#";
                              link.download = `${course.title
                                .replace(/\s+/g, "-")
                                .toLowerCase()}-certificate.pdf`;
                              link.click();
                            }}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Certificate
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">2</div>
                  <div className="text-blue-100">Degrees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4</div>
                  <div className="text-blue-100">Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">12+</div>
                  <div className="text-blue-100">Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">200+</div>
                  <div className="text-blue-100">Learning Hours</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
