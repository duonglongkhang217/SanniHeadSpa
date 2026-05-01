import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Regular Customer",
    content: "The best head spa experience in Sydney. I've been coming to SanniHeadSpa for 6 months and it has completely changed my stress levels.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Local Business Owner",
    content: "Excellent service and professionalism. The massage combo is perfect after a long week. Highly recommended the 90-minute treatment.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    role: "Software Engineer",
    content: "Truly therapeutic. The attention to detail during the hair wash is incredible. It's more than just a spa; it's a mental reset.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-light">What Our <span className="font-serif italic text-brand-brown">Clients</span> Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-brand-cream rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 text-brand-brown opacity-20" size={40} />
              <div className="flex space-x-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-brand-brown">★</div>
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed">"{t.content}"</p>
              <div>
                <h4 className="font-medium text-brand-dark">{t.name}</h4>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
