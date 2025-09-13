"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Eye,
  Heart,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn best practices for structuring large React applications with TypeScript, including advanced patterns and performance optimizations.",
    content:
      "In this comprehensive guide, we'll explore how to build maintainable and scalable React applications using TypeScript...",
    author: {
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      role: "Full Stack Developer",
    },
    publishedAt: "2023-12-15",
    readTime: 8,
    views: 2340,
    likes: 156,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["React", "TypeScript", "Architecture", "Best Practices"],
    featured: true,
    url: "/blog/scalable-react-typescript",
  },
  {
    id: 2,
    title: "Microservices Architecture: A Complete Guide",
    excerpt:
      "Discover how to design, implement, and deploy microservices architecture for modern web applications.",
    content:
      "Microservices architecture has become the gold standard for building modern, scalable applications...",
    author: {
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      role: "Full Stack Developer",
    },
    publishedAt: "2023-12-08",
    readTime: 12,
    views: 1890,
    likes: 134,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["Microservices", "Architecture", "Node.js", "Docker"],
    featured: true,
    url: "/blog/microservices-complete-guide",
  },
  {
    id: 3,
    title: "Optimizing Web Performance with Modern Tools",
    excerpt:
      "Comprehensive strategies for improving web application performance using cutting-edge tools and techniques.",
    content:
      "Web performance is crucial for user experience and SEO. In this article, we'll explore modern tools...",
    author: {
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      role: "Full Stack Developer",
    },
    publishedAt: "2023-12-01",
    readTime: 6,
    views: 1456,
    likes: 89,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["Performance", "Optimization", "Web Development"],
    featured: false,
    url: "/blog/web-performance-optimization",
  },
  {
    id: 4,
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the web development landscape and what it means for developers.",
    content:
      "Artificial Intelligence is revolutionizing web development in unprecedented ways...",
    author: {
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      role: "Full Stack Developer",
    },
    publishedAt: "2023-11-24",
    readTime: 10,
    views: 2890,
    likes: 245,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["AI", "Machine Learning", "Future Tech", "Innovation"],
    featured: false,
    url: "/blog/ai-future-web-development",
  },
  {
    id: 5,
    title: "Database Design Patterns for Modern Applications",
    excerpt:
      "Essential database design patterns and strategies for building robust, scalable data layers.",
    content:
      "Proper database design is fundamental to application success. Let's explore key patterns...",
    author: {
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      role: "Full Stack Developer",
    },
    publishedAt: "2023-11-17",
    readTime: 9,
    views: 1234,
    likes: 78,
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    tags: ["Database", "SQL", "Architecture", "Backend"],
    featured: false,
    url: "/blog/database-design-patterns",
  },
  {
    id: 6,
    title: "Securing Your Node.js Applications",
    excerpt:
      "Comprehensive security practices for Node.js applications, from authentication to data protection.",
    content:
      "Security should be a top priority in any Node.js application. Here are essential practices...",
    author: {
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      role: "Full Stack Developer",
    },
    publishedAt: "2023-11-10",
    readTime: 7,
    views: 1567,
    likes: 112,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    tags: ["Security", "Node.js", "Authentication", "Best Practices"],
    featured: false,
    url: "/blog/nodejs-security-guide",
  },
];

const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

export default function Blog() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  const handleReadPost = (url: string) => {
    // In a real application, you would navigate to the blog post
    window.open(url, "_blank");
  };

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology
            trends, and best practices
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Featured Articles
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-700">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white text-sm mb-2">
                        <Eye className="h-4 w-4 mr-1" />
                        {post.views.toLocaleString()}
                        <Heart className="h-4 w-4 ml-4 mr-1" />
                        {post.likes}
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={post.author.avatar}
                          alt={post.author.name}
                        />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        <div className="font-medium">{post.author.name}</div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 ml-auto">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime} min read
                      </div>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleReadPost(post.url)}
                        className="group-hover:bg-blue-600 transition-colors"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Recent Articles
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center bg-black/60 text-white text-xs px-2 py-1 rounded">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views > 1000
                          ? `${(post.views / 1000).toFixed(1)}k`
                          : post.views}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}m
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleReadPost(post.url)}
                      >
                        Read
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tags Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Popular Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allTags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-pointer"
                  onClick={() => {
                    // In a real app, this would filter posts by tag
                    console.log(`Filter by tag: ${tag}`);
                  }}
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6">
                Subscribe to get the latest articles, tutorials, and insights
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => {
                    // In a real app, this would handle newsletter subscription
                    alert(
                      "Newsletter subscription functionality would be implemented here!"
                    );
                  }}
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-3">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
