import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
           <span className="font-bold text-xl text-slate-800 tracking-tight">
              Harsh<span className="text-purple-600">Mathur</span>
            </span>
            <p className="text-slate-500 text-sm mt-1">
              Building digital experiences that matter.
            </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-purple-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-purple-600 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-purple-600 transition-colors">
            <Instagram size={20} />
          </a>
        </div>

        <div className="text-slate-500 text-sm">
          &copy; 2025 Harsh Mathur. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
