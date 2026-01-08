"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectModalProps {
  project: any;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  open,
  onClose,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {open && project && (
        <Dialog open={open} onOpenChange={onClose}>
          {/* Backdrop animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal content animation */}
          <DialogContent className="z-50 max-w-3xl max-h-[90vh] overflow-y-auto border-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {project.title}
                </DialogTitle>
              </DialogHeader>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg my-4"
              />

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies?.map((tech: string) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button
                    onClick={() =>
                      window.open(project.liveUrl, "_blank")
                    }
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Project
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(project.githubUrl, "_blank")
                    }
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                )}
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
