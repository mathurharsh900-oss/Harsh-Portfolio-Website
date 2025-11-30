import React from 'react';
import { motion } from 'framer-motion';
import { Search, Monitor, TrendingUp } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'SEO & Content',
    description: 'Keyword strategy, on-page & technical SEO, and compelling content writing to rank your brand higher.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Web Design & Dev',
    description: 'Responsive WordPress sites, custom UI/UX design, and high-converting landing pages tailored to your needs.',
    icon: Monitor,
  },
  {
    id: 3,
    title: 'Performance Marketing',
    description: 'Google Ads, Meta Ads, lead funnels, and CRO strategies designed to maximize your return on investment.',
    icon: TrendingUp,
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-white relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">My Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Services I Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Comprehensive digital solutions to take your business to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <service.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;