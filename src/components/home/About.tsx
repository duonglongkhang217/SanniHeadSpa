import { motion } from 'motion/react';
import { Bath, Flower, Leaf, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className="text-brand-brown" />,
      title: "Professionalism",
      description: "Our certified therapists ensure every treatment meets clinical relaxation standards."
    },
    {
      icon: <Flower className="text-brand-brown" />,
      title: "Personalized Care",
      description: "Every treatment is tailored to your specific stress points and physical needs."
    },
    {
      icon: <Leaf className="text-brand-brown" />,
      title: "Mind & Body",
      description: "We don't just treat the scalp; we rejuvenate your entire mental state."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600" 
                alt="Spa ambiance" 
                className="rounded-2xl shadow-lg object-cover h-[400px] w-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600" 
                alt="Treatment room" 
                className="rounded-2xl shadow-lg object-cover h-[400px] w-full"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-brown font-medium tracking-[0.2em] text-sm uppercase mb-4 block">About SanniHeadSpa</span>
              <h2 className="text-4xl md:text-5xl font-display font-light mb-8 leading-tight">
                Authentic Rejuvenation for the <span className="font-serif italic text-brand-brown">Modern Soul</span>
              </h2>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                At SanniHeadSpa, we believe that true wellness starts from the top. Nestled in the heart of Campsie, our sanctuary offers a unique blend of traditional therapeutic hair washing and modern massage therapy. 
                Our mission is to provide an escape from the city hustle, focusing on scalp health and mental clarity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="p-2 bg-brand-beige inline-block rounded-lg">
                      {feature.icon}
                    </div>
                    <h4 className="font-display font-medium text-lg">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
