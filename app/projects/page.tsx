'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/siteData';
import ProjectCard from '@/components/ProjectCard';

/**
 * PROJECTS PAGE
 * Grid display of all projects
 * Add/update projects in /data/siteData.ts
 * Replace placeholder images in /public/images/projects/
 */

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects I've built using various technologies and frameworks.
            Each project represents a learning journey and a problem solved.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-white rounded-xl p-12 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}

