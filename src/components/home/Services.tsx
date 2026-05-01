import { SERVICES } from '@/src/constants';
import { motion } from 'motion/react';
import { Clock, Tag, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-brown font-medium tracking-[0.2em] text-sm uppercase mb-4 block"
          >
            Our Treatments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-light mb-6"
          >
            Curated <span className="font-serif italic text-brand-brown">Wellness</span> Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Every package can be customized to your preference. Whether you want more focus on your back or a longer head massage, we accommodate your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all border border-brand-brown/5 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-brand-beige rounded-2xl group-hover:bg-brand-brown group-hover:text-white transition-colors duration-500">
                  <Tag size={20} />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-semibold text-brand-dark">${pkg.price}</span>
                  <div className="flex items-center text-gray-400 text-xs mt-1 justify-end">
                    <Clock size={12} className="mr-1" />
                    {pkg.duration} mins
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-brand-brown transition-colors">
                {pkg.name}
              </h3>
              
              <p className="text-sm text-gray-500 mb-8 leading-relaxed line-clamp-3">
                {pkg.description}
              </p>

              <div className="space-y-3 mb-10">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Includes:</p>
                {pkg.includes.map((item, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-sage mr-3" />
                    {item}
                  </div>
                ))}
              </div>

              <Link 
                to={`/booking?serviceId=${pkg.id}`}
                className="flex items-center justify-center w-full py-4 rounded-2xl bg-brand-beige text-brand-brown font-medium hover:bg-brand-brown hover:text-white transition-all gap-2"
              >
                Book Package
              </Link>
            </motion.div>
          ))}

          {/* Customization Note Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-brand-brown rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white"
          >
            <PlusCircle size={48} className="mb-6 opacity-50" />
            <h3 className="text-2xl font-display font-light mb-4">Total Customization</h3>
            <p className="text-sm text-white/80 mb-8 leading-relaxed">
              Don't see exactly what you need? All our combos are flexible. Swap a foot massage for more head treatment at no extra charge if the duration is the same.
            </p>
            <div className="text-xs uppercase tracking-widest font-bold border-b border-white/30 pb-2">
              Speak to our therapist
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
