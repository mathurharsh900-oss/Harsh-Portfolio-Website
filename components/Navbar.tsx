import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Clients', path: '/clients' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine navbar background:
  // - On Home: transparent until scrolled
  // - On other pages: always white/opaque unless specific design requirement, 
  //   but consistent white/90 is safest for readability across various backgrounds.
  const isOpaque = scrolled || !isHome;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isOpaque
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              H
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              Harsh<span className="text-purple-600">Mathur</span>
            </span>
          </Link>

          {/* Desktop Nav - Switched to lg breakpoint for better fit */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
               const isActive = location.pathname === link.path;
               return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors relative group text-sm xl:text-base ${
                    isActive ? 'text-purple-600' : 'text-slate-600 hover:text-purple-600'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-purple-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all text-sm xl:text-base"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button - Switched to lg breakpoint */}
          <button
            className="lg:hidden text-slate-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === link.path ? 'text-purple-600' : 'text-slate-700 hover:text-purple-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;