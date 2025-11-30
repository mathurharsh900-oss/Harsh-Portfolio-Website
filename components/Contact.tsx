import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myzryklb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 pt-32 bg-slate-50 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Let's Discuss Your Next Project</h3>
            <p className="text-slate-600 mb-12 text-lg">
              Whether you need a website overhaul, better SEO rankings, or a comprehensive marketing strategy, I'm here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-purple-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Email Me</p>
                  <a href="mailto:mathurharsh900@gmail.com" className="text-lg font-bold text-slate-900 hover:text-purple-600 transition-colors">
                    mathurharsh900@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-purple-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Call Me</p>
                  <a href="tel:+919990985496" className="text-lg font-bold text-slate-900 hover:text-purple-600 transition-colors">
                    +91 9990985496
                  </a>
                </div>
              </div>

               <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-purple-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Location</p>
                  <p className="text-lg font-bold text-slate-900">
                    India (Available for Remote Work)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100"
          >
            {submitStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">
                  Thanks for reaching out, Harsh. I'll get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-8 text-purple-600 font-semibold hover:text-purple-700 underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">Something went wrong. Please try again.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;