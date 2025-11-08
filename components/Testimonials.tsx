// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import {
//   Star,
//   Quote,
//   Linkedin,
//   Mail,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   Pause,
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Chen",
//     role: "CTO at TechFlow",
//     company: "TechFlow Solutions",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: 5,
//     text: "John delivered exceptional results on our e-commerce platform. His technical expertise and attention to detail are outstanding. The project was completed ahead of schedule and exceeded all our expectations.",
//     project: "E-commerce Platform",
//     linkedinUrl: "https://linkedin.com/in/sarahchen",
//     verified: true,
//   },
//   {
//     id: 2,
//     name: "Michael Rodriguez",
//     role: "Product Manager",
//     company: "InnovateLab",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     rating: 5,
//     text: "Working with John was a game-changer for our team. His full-stack development skills and problem-solving approach helped us launch our product 3 months early. Highly recommended!",
//     project: "Task Management App",
//     linkedinUrl: "https://linkedin.com/in/michaelrodriguez",
//     verified: true,
//   },
//   {
//     id: 3,
//     name: "Emily Johnson",
//     role: "Founder & CEO",
//     company: "StartupBoost",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//     rating: 5,
//     text: "John's expertise in React and Node.js was exactly what we needed. He transformed our complex requirements into a beautiful, functional application. Professional, reliable, and talented.",
//     project: "Social Media Analytics",
//     linkedinUrl: "https://linkedin.com/in/emilyjohnson",
//     verified: true,
//   },
//   {
//     id: 4,
//     name: "David Kim",
//     role: "Lead Developer",
//     company: "CloudTech Inc",
//     image: "https://randomuser.me/api/portraits/men/56.jpg",
//     rating: 5,
//     text: "John's code quality is exceptional. He follows best practices, writes clean documentation, and his solutions are always scalable. A true professional who delivers on promises.",
//     project: "Weather Analytics Dashboard",
//     linkedinUrl: "https://linkedin.com/in/davidkim",
//     verified: true,
//   },
//   {
//     id: 5,
//     name: "Lisa Park",
//     role: "VP of Engineering",
//     company: "DataDriven Co",
//     image: "https://randomuser.me/api/portraits/women/25.jpg",
//     rating: 5,
//     text: "John has an incredible ability to understand complex business requirements and translate them into technical solutions. His communication skills are as impressive as his coding abilities.",
//     project: "AI Content Generator",
//     linkedinUrl: "https://linkedin.com/in/lisapark",
//     verified: true,
//   },
//   {
//     id: 6,
//     name: "James Wilson",
//     role: "Technical Director",
//     company: "FitnessTech",
//     image: "https://randomuser.me/api/portraits/men/73.jpg",
//     rating: 5,
//     text: "The fitness tracking app John developed for us has been a huge success. His attention to UX/UI details and performance optimization made all the difference. Excellent work!",
//     project: "Fitness Tracking App",
//     linkedinUrl: "https://linkedin.com/in/jameswilson",
//     verified: true,
//   },
// ];

// // const companies = [
// //   {
// //     name: "TechFlow",
// //     logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
// //   },
// //   {
// //     name: "InnovateLab",
// //     logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop",
// //   },
// //   {
// //     name: "StartupBoost",
// //     logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
// //   },
// //   {
// //     name: "CloudTech",
// //     logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop",
// //   },
// //   {
// //     name: "DataDriven",
// //     logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
// //   },
// //   {
// //     name: "FitnessTech",
// //     logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop",
// //   },
// // ];

// export default function Testimonials() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [itemsPerView, setItemsPerView] = useState(1);

//   // Responsive items per view
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(1);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => {
//         const maxSlide = Math.ceil(testimonials.length / itemsPerView) - 1;
//         return prev >= maxSlide ? 0 : prev + 1;
//       });
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying, itemsPerView]);

//   const nextSlide = () => {
//     const maxSlide = Math.ceil(testimonials.length / itemsPerView) - 1;
//     setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     const maxSlide = Math.ceil(testimonials.length / itemsPerView) - 1;
//     setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
//   };

//   const toggleAutoPlay = () => {
//     setIsAutoPlaying(!isAutoPlaying);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const maxSlides = Math.ceil(testimonials.length / itemsPerView);

//   return (
//     <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             Client Testimonials
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             What clients and colleagues say about working with me
//           </p>
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <div className="relative mb-16">
//           {/* Carousel Container */}
//           <div className="overflow-hidden">
//             <motion.div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${
//                   currentSlide * (100 / itemsPerView)
//                 }%)`,
//                 width: `${(testimonials.length / itemsPerView) * 100}%`,
//               }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={testimonial.id}
//                   className={`flex-shrink-0 px-4`}
//                   style={{ width: `${100 / testimonials.length}%` }}
//                 >
//                   <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
//                     <CardContent className="p-8">
//                       <div className="flex items-start space-x-4 mb-6">
//                         <Avatar className="w-16 h-16">
//                           <AvatarImage
//                             src={testimonial.image}
//                             alt={testimonial.name}
//                           />
//                           <AvatarFallback>
//                             {testimonial.name
//                               .split(" ")
//                               .map((n) => n[0])
//                               .join("")}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div className="flex-1">
//                           <div className="flex items-center justify-between mb-2">
//                             <h3 className="font-bold text-lg text-gray-900 dark:text-white">
//                               {testimonial.name}
//                             </h3>
//                             {testimonial.verified && (
//                               <div className="flex items-center text-green-600">
//                                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                                 <span className="text-xs font-medium">
//                                   Verified
//                                 </span>
//                               </div>
//                             )}
//                           </div>
//                           <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
//                             {testimonial.role}
//                           </div>
//                           <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
//                             {testimonial.company}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Rating */}
//                       <div className="flex items-center mb-4">
//                         {[...Array(testimonial.rating)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className="h-5 w-5 text-yellow-400 fill-current"
//                           />
//                         ))}
//                         <span className="ml-2 text-sm text-gray-500">
//                           {testimonial.rating}.0
//                         </span>
//                       </div>

//                       {/* Quote */}
//                       <div className="relative mb-6">
//                         <Quote className="absolute -top-2 -left-1 h-8 w-8 text-blue-200 dark:text-blue-800" />
//                         <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6 italic">
//                           {testimonial.text}
//                         </p>
//                       </div>

//                       {/* Project & Actions */}
//                       <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
//                         <div>
//                           <span className="text-xs text-gray-500">
//                             Project:
//                           </span>
//                           <div className="text-sm font-medium text-gray-900 dark:text-white">
//                             {testimonial.project}
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             onClick={() =>
//                               window.open(testimonial.linkedinUrl, "_blank")
//                             }
//                           >
//                             <Linkedin className="h-4 w-4" />
//                           </Button>
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             onClick={() =>
//                               window.open(
//                                 "mailto:owolabiagbabiaka.com?subject=Reference Request",
//                                 "_blank"
//                               )
//                             }
//                           >
//                             <Mail className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Carousel Controls */}
//           <div className="flex items-center justify-center mt-8 space-x-4">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={prevSlide}
//               className="rounded-full"
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>

//             {/* Dots Indicator */}
//             <div className="flex space-x-2">
//               {Array.from({ length: maxSlides }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-colors duration-200 ${
//                     index === currentSlide ? "bg-blue-600" : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>

//             <Button
//               variant="outline"
//               size="icon"
//               onClick={nextSlide}
//               className="rounded-full"
//             >
//               <ChevronRight className="h-4 w-4" />
//             </Button>

//             <Button
//               variant="outline"
//               size="icon"
//               onClick={toggleAutoPlay}
//               className="rounded-full"
//             >
//               {isAutoPlaying ? (
//                 <Pause className="h-4 w-4" />
//               ) : (
//                 <Play className="h-4 w-4" />
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* Companies Section */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
//             Trusted by Leading Companies
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
//             {companies.map((company, index) => (
//               <motion.div
//                 key={company.name}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="grayscale hover:grayscale-0 transition-all duration-300"
//               >
//                 <img
//                   src={company.logo}
//                   alt={company.name}
//                   className="w-24 h-12 object-contain mx-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div> */}

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-16"
//         >
//           <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
//             <CardContent className="p-8">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//                 <div>
//                   <div className="text-3xl font-bold mb-2">98%</div>
//                   <div className="text-blue-100">Client Satisfaction</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold mb-2">50+</div>
//                   <div className="text-blue-100">Happy Clients</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold mb-2">5.0</div>
//                   <div className="text-blue-100">Average Rating</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold mb-2">100%</div>
//                   <div className="text-blue-100">On-Time Delivery</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//             Ready to Join These Success Stories?
//           </h3>
//           <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
//             Let&#39;s discuss how I can help bring your project to life and
//             exceed your expectations.
//           </p>
//           <Button
//             size="lg"
//             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
//             onClick={() =>
//               document
//                 .querySelector("#contact")
//                 ?.scrollIntoView({ behavior: "smooth" })
//             }
//           >
//             Start Your Project
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
