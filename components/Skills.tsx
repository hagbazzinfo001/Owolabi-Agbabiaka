// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const skillsData = [
//   { name: "JavaScript", level: 95, color: "#F7DF1E" },
//   { name: "React", level: 90, color: "#61DAFB" },
//   { name: "Node.js", level: 85, color: "#339933" },
//   { name: "TypeScript", level: 88, color: "#3178C6" },
//   { name: "Python", level: 80, color: "#3776AB" },
//   { name: "SQL", level: 75, color: "#336791" },
// ];

// const categoryData = [
//   { name: "Frontend", value: 40, fill: "#3B82F6" },
//   { name: "Backend", value: 35, fill: "#10B981" },
//   { name: "DevOps", value: 15, fill: "#F59E0B" },
//   { name: "Design", value: 10, fill: "#EF4444" },
// ];

// const toolsWithIcons = [
//   { name: "React", icon: "⚛️", category: "Frontend" },
//   { name: "Next.js", icon: "▲", category: "Frontend" },
//   { name: "Vue.js", icon: "💚", category: "Frontend" },
//   { name: "TypeScript", icon: "🔷", category: "Language" },
//   { name: "JavaScript", icon: "🟨", category: "Language" },
//   { name: "Node.js", icon: "🟢", category: "Backend" },
//   { name: "Express.js", icon: "🚂", category: "Backend" },
//   { name: "MongoDB", icon: "🍃", category: "Database" },
//   { name: "PostgreSQL", icon: "🐘", category: "Database" },
//   { name: "Docker", icon: "🐳", category: "DevOps" },
//   { name: "AWS", icon: "☁️", category: "Cloud" },
//   { name: "Git", icon: "📝", category: "Tools" },
//   { name: "Figma", icon: "🎨", category: "Design" },
//   { name: "Tailwind CSS", icon: "💨", category: "Styling" },
//   { name: "Python", icon: "🐍", category: "Language" },
//   { name: "GraphQL", icon: "🔗", category: "API" },
//   { name: "Redis", icon: "🔴", category: "Database" },
//   { name: "Kubernetes", icon: "⚙️", category: "DevOps" },
// ];

// const categories = Array.from(
//   new Set(toolsWithIcons.map((tool) => tool.category))
// );

// export default function Skills() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             Skills & Expertise
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             A comprehensive overview of my technical skills and proficiency
//             levels
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-1 gap-12 mb-12">
//           {/* Skills Chart */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Card className="min-h-[350px]">
//               <CardHeader>
//                 <CardTitle>Technical Proficiency</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {isClient ? (
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart
//                       data={skillsData}
//                       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                     >
//                       <XAxis
//                         dataKey="name"
//                         tick={{ fontSize: 12 }}
//                         angle={-45}
//                         textAnchor="end"
//                         height={80}
//                       />
//                       <YAxis />
//                       <Tooltip
//                         formatter={(value) => [`${value}%`, "Proficiency"]}
//                         labelStyle={{ color: "#374151" }}
//                         contentStyle={{
//                           backgroundColor: "#f9fafb",
//                           border: "1px solid #e5e7eb",
//                           borderRadius: "8px",
//                         }}
//                       />
//                       <Bar
//                         dataKey="level"
//                         fill="#3B82F6"
//                         radius={[4, 4, 0, 0]}
//                         name="Proficiency Level"
//                       />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 ) : (
//                   <div className="w-full h-[300px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
//                     <div className="text-center">
//                       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
//                       <p className="text-gray-500 dark:text-gray-400">
//                         Loading chart...
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Skills Distribution */}
//         </div>

//         {/* Tools & Technologies - Categories in Row Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle>Tools & Technologies</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {categories.map((category, categoryIndex) => (
//                   <motion.div
//                     key={category}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="space-y-4"
//                   >
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center pb-2 border-b border-gray-200 dark:border-gray-600">
//                       {category}
//                     </h3>
//                     <div className="grid grid-cols-1 gap-3">
//                       {toolsWithIcons
//                         .filter((tool) => tool.category === category)
//                         .map((tool, index) => (
//                           <motion.div
//                             key={tool.name}
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: index * 0.05, duration: 0.3 }}
//                             viewport={{ once: true }}
//                           >
//                             <Badge
//                               variant="secondary"
//                               className="w-full px-3 py-2 text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-pointer group justify-center"
//                             >
//                               <span className="text-lg mr-2 group-hover:scale-110 transition-transform">
//                                 {tool.icon}
//                               </span>
//                               <span className="truncate">{tool.name}</span>
//                             </Badge>
//                           </motion.div>
//                         ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
