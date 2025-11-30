import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6 border border-purple-200">
              👋 Hello, I'm Harsh Mathur
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">trusted brands</span> with SEO & Web Dev.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              With 1.5+ years of experience in healthcare, medical tourism, real estate, and e-commerce. I combine beautiful code with performance marketing to drive real growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 transition-all"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-purple-300 transition-all group"
              >
                See My Work
                <span className="ml-2 bg-slate-100 group-hover:bg-purple-100 p-1 rounded-full transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:text-purple-600 transition-colors -rotate-45 group-hover:rotate-0" />
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-slate-900">1.5+</h4>
                <p className="text-sm text-slate-500 mt-1">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-slate-900">10+</h4>
                <p className="text-sm text-slate-500 mt-1">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-slate-900">20+</h4>
                <p className="text-sm text-slate-500 mt-1">Projects Done</p>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-white">
                {/* Using a high quality professional placeholder */}
                <img 
                    src="https://picsum.photos/600/700?grayscale" 
                    alt="Harsh Mathur" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge 1 */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">ROI Focus</p>
                            <p className="text-sm font-bold text-slate-900">High Conversion</p>
                        </div>
                    </div>
                </motion.div>

                 {/* Floating Badge 2 */}
                 <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                           <span className="font-bold text-lg">SEO</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">Ranking</p>
                            <p className="text-sm font-bold text-slate-900">#1 Strategy</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Glowing Border/Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-30 blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;