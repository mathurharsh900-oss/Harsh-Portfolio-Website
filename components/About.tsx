import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  "SEO Strategy", "Google Ads", "WordPress Development",
  "Content Strategy", "Social Media Marketing", "CRO",
  "React & TypeScript", "Tailwind CSS"
];

const About: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
             <div className="relative">
                <div className="absolute inset-0 bg-purple-600 rounded-2xl rotate-3 opacity-10"></div>
                <img 
                    src="https://picsum.photos/600/400?grayscale" 
                    alt="Working" 
                    className="relative rounded-2xl shadow-xl w-full object-cover"
                />
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase mb-2">About Me</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Analytical. Creative. Conversion-Focused.</h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm Harsh Mathur, a passionate Digital Marketer & Web Developer. I don't just build websites; I build digital ecosystems that thrive. 
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              With a unique blend of technical development skills and marketing acumen, I bridge the gap between "looking good" and "selling well." My approach is data-driven, ensuring every pixel and every keyword serves a purpose.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;