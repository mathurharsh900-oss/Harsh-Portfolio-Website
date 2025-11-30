import React from 'react';

const clients = [
  "Paeonia Healthcare",
  "SBTHPL",
  "Torus Academy",
  "Torus Infotech",
  "CNDS Healthcare",
  "Sharma Electricals",
  "Lyf Says",
  "NRI Wellness"
];

const Clients: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase mb-2">My Network</h2>
         <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-12">
            Trusted by Innovative Brands
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="px-8 py-4 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-lg font-medium hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50 transition-all cursor-default select-none shadow-sm hover:shadow-md"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;