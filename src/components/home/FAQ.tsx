import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is a Therapeutic Head Spa?",
    answer: "Our head spa is a holistic treatment that focuses on scalp health and mental relaxation. It includes deep cleansing to remove build-up, scalp massage to stimulate blood flow, and aromatherapy to reduce stress."
  },
  {
    question: "Can I customize my massage package?",
    answer: "Absolutely! We focus on your needs. During the booking process or upon arrival, you can specify if you'd like more focus on certain areas (e.g., 60 mins back massage instead of a 30/30 split)."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-3 days in advance, especially for weekend slots. However, you can always check our real-time calendar for last-minute availability."
  },
  {
    question: "What should I wear for my treatment?",
    answer: "Please feel free to wear whatever you are most comfortable in. Upon your arrival, we will provide complimentary spa attire for you to change into, ensuring a relaxing and comfortable experience throughout your visit."
  },
  {
    question: "Where is SanniHeadSpa located?",
    answer: "We are at 420 Canterbury Road, Campsie 2194. There is street parking available nearby, and we are easily accessible via public transport."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-light mb-6">Frequently Asked <span className="font-serif italic text-brand-brown">Questions</span></h2>
          <p className="text-gray-500">Everything you need to know about your upcoming visit.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-brand-beige pb-4">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className="text-lg font-medium text-brand-dark group-hover:text-brand-brown transition-colors">
                  {faq.question}
                </span>
                <div className="p-2 bg-brand-beige rounded-full text-brand-brown">
                  {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
