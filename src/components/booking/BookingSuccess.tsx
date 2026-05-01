import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Clock, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookingSuccess() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-[3rem] p-12 text-center shadow-xl border border-brand-brown/5"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, delay: 0.2 }}
          className="w-24 h-24 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-8 text-brand-brown"
        >
          <CheckCircle2 size={48} />
        </motion.div>

        <h1 className="text-3xl font-display font-light mb-4">Booking Confirmed!</h1>
        <p className="text-gray-500 mb-10 leading-relaxed text-sm">
          Your journey to relaxation at SanniHeadSpa has been scheduled. A confirmation email has been sent to your inbox.
        </p>

        <div className="bg-brand-cream rounded-2xl p-6 mb-10 space-y-4 text-left">
          <div className="flex items-center text-sm">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-4 text-brand-brown shadow-sm">
              <Calendar size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Date</p>
              <p className="font-medium">Scheduled for your chosen day</p>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-4 text-brand-brown shadow-sm">
              <Clock size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Time</p>
              <p className="font-medium">Your selected slot</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link 
            to="/" 
            className="flex items-center justify-center w-full py-4 bg-brand-brown text-white rounded-2xl font-medium hover:bg-brand-dark transition-all gap-2"
          >
            <Home size={18} /> Return Home
          </Link>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Need to reschedule? Check your email.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
