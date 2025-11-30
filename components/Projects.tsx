import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'NRI Wellness',
    category: 'Medical Tourism',
    description: 'A comprehensive medical tourism platform facilitating seamless healthcare solutions for international patients.',
    image: 'https://picsum.photos/seed/nri/800/600',
    link: '#',
  },
  {
    id: 2,
    title: 'CNDS India',
    category: 'Healthcare',
    description: 'Corporate website for a leading healthcare provider, featuring service catalogs and appointment booking systems.',
    image: 'https://picsum.photos/seed/cnds/800/600',
    link: '#',
  },
  {
    id: 3,
    title: 'Lyf Says',
    category: 'Blog / SEO',
    description: 'High-traffic SEO-focused blog optimized for organic reach, AdSense revenue, and user engagement.',
    image: 'https://picsum.photos/seed/lyf/800/600',
    link: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Featured Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-md text-purple-700 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center font-semibold text-purple-600 hover:text-purple-700"
                >
                  Visit Site <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;