import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Suraj Singh Yadav",
    role: "CEO, SBTHPL",
    content: "Harsh transformed our digital presence. His strategic approach to SEO and clean design aesthetic significantly improved our lead generation."
  },
  {
    id: 2,
    name: "Sudhanshu",
    role: "CEO, CNDS Healthcare",
    content: "Professional, analytical, and creative. Harsh delivered a website that perfectly represents our brand values and works flawlessly across devices."
  },
  {
    id: 3,
    name: "Akansha Sharma",
    role: "Marketing Manager, Sharma Electricals",
    content: "The performance marketing campaigns Harsh managed were a game changer. We saw immediate ROI and appreciate his conversion-focused mindset."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden min-h-screen">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-purple-400 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            What Clients Say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <Quote className="text-purple-500 mb-6 w-8 h-8 opacity-50" />
              <p className="text-slate-300 mb-6 italic leading-relaxed">"{t.content}"</p>
              <div>
                <h4 className="text-lg font-bold text-white">{t.name}</h4>
                <p className="text-sm text-purple-300">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;