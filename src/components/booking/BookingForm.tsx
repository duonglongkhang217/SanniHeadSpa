import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { SERVICES, TIME_SLOTS } from '@/src/constants';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { format, addDays, isSameDay } from 'date-fns';

export default function BookingForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialServiceId = searchParams.get('serviceId');

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: initialServiceId || '',
    date: new Date(),
    timeSlot: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customizationNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate next 14 days
  const availableDates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    navigate('/booking/success');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl shadow-brand-brown/5 overflow-hidden border border-brand-brown/5">
      {/* Progress Bar */}
      <div className="bg-brand-beige p-2 flex">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className={`h-1.5 flex-1 rounded-full mx-1 transition-all duration-500 ${
              step >= i ? 'bg-brand-brown' : 'bg-white/50'
            }`} 
          />
        ))}
      </div>

      <div className="p-8 md:p-12">
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-display font-light mb-2">Select a Treatment</h2>
                  <p className="text-gray-500">Pick the perfect rejuvenation package for yourself.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, serviceId: service.id });
                        nextStep();
                      }}
                      className={`flex justify-between items-center p-6 rounded-2xl border-2 transition-all text-left ${
                        formData.serviceId === service.id 
                          ? 'border-brand-brown bg-brand-cream' 
                          : 'border-brand-beige hover:border-brand-brown/30 bg-white'
                      }`}
                    >
                      <div>
                        <h4 className="font-semibold text-lg">{service.name}</h4>
                        <p className="text-sm text-gray-500">{service.duration} mins • ${service.price}</p>
                      </div>
                      <ChevronRight className={formData.serviceId === service.id ? 'text-brand-brown' : 'text-gray-300'} />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Date & Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-display font-light mb-2">When shall we see you?</h2>
                  <p className="text-gray-500">Choose a date and time that fits your schedule.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 block">Select Date</label>
                    <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
                      {availableDates.map((date) => (
                        <button
                          key={date.toISOString()}
                          type="button"
                          onClick={() => setFormData({ ...formData, date })}
                          className={`flex-shrink-0 w-20 h-24 rounded-2xl flex flex-col items-center justify-center transition-all ${
                            isSameDay(formData.date, date)
                              ? 'bg-brand-brown text-white shadow-lg'
                              : 'bg-brand-beige text-brand-dark hover:bg-brand-brown/10'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold">{format(date, 'EEE')}</span>
                          <span className="text-2xl font-display font-light">{format(date, 'd')}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 block">Select Time Slot</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`py-3 rounded-xl text-sm font-medium transition-all ${
                            formData.timeSlot === slot
                              ? 'bg-brand-brown text-white shadow-md'
                              : 'bg-white border border-brand-beige text-gray-600 hover:border-brand-brown'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button type="button" onClick={prevStep} className="flex items-center text-gray-500 font-medium hover:text-brand-dark">
                    <ChevronLeft size={20} className="mr-1" /> Back
                  </button>
                  <button 
                    type="button" 
                    disabled={!formData.timeSlot}
                    onClick={nextStep} 
                    className="px-8 py-3 bg-brand-brown text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-dark transition-all"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Personal Details & Customization */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-display font-light mb-2">Almost there...</h2>
                  <p className="text-gray-500">Provide your contact details and any special requests.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-brand-beige focus:outline-none focus:ring-2 focus:ring-brand-brown/20 focus:border-brand-brown transition-all"
                      value={formData.customerName}
                      onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-beige focus:outline-none focus:ring-2 focus:ring-brand-brown/20 focus:border-brand-brown transition-all"
                      value={formData.customerEmail}
                      onChange={e => setFormData({ ...formData, customerEmail: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0400 000 000"
                      className="w-full px-4 py-3 rounded-xl border border-brand-beige focus:outline-none focus:ring-2 focus:ring-brand-brown/20 focus:border-brand-brown transition-all"
                      value={formData.customerPhone}
                      onChange={e => setFormData({ ...formData, customerPhone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Customization / Special Requests</label>
                  <textarea 
                    rows={4}
                    placeholder="e.g. Please focus more on my lower back, or swap foot massage for head massage."
                    className="w-full px-4 py-3 rounded-xl border border-brand-beige focus:outline-none focus:ring-2 focus:ring-brand-brown/20 focus:border-brand-brown transition-all"
                    value={formData.customizationNotes}
                    onChange={e => setFormData({ ...formData, customizationNotes: e.target.value })}
                  />
                  <p className="text-[10px] text-gray-400 italic">Example: A package includes 30 min foot + 30 min back. You can request 60 min back instead.</p>
                </div>

                <div className="flex justify-between pt-4">
                  <button type="button" onClick={prevStep} className="flex items-center text-gray-500 font-medium hover:text-brand-dark">
                    <ChevronLeft size={20} className="mr-1" /> Back
                  </button>
                  <button 
                    type="button" 
                    disabled={!formData.customerName || !formData.customerEmail || !formData.customerPhone}
                    onClick={nextStep} 
                    className="px-8 py-3 bg-brand-brown text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-dark transition-all"
                  >
                    Review Booking
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Payment */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-display font-light mb-2">Final Confirmation</h2>
                  <p className="text-gray-500">Review your appointment details and complete payment.</p>
                </div>

                <div className="bg-brand-cream rounded-3xl p-8 border border-brand-brown/10 space-y-6">
                  <div className="bg-white/80 p-4 rounded-2xl border border-brand-brown/20 mb-4 flex items-start gap-4">
                    <div className="p-2 bg-brand-beige rounded-lg text-brand-brown">
                      <CalendarIcon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">Important Arrival Instruction</p>
                      <p className="text-xs text-brand-brown leading-relaxed mt-1">
                        We are located inside another premises. The entrance is locked for security. Please give us a call at <strong>0432 025 301</strong> when you arrive, and we will come to open the door for you.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Treatment</p>
                        <p className="font-medium">{selectedService?.name}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Date & Time</p>
                        <div className="flex items-center text-sm font-medium">
                          <CalendarIcon size={14} className="mr-2 text-brand-brown" />
                          {format(formData.date, 'MMMM do, yyyy')}
                          <Clock size={14} className="ml-4 mr-2 text-brand-brown" />
                          {formData.timeSlot}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Customer</p>
                        <p className="font-medium">{formData.customerName}</p>
                        <p className="text-sm text-gray-500">{formData.customerEmail}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Total</p>
                        <p className="text-2xl font-bold text-brand-brown">${selectedService?.price}</p>
                      </div>
                    </div>
                  </div>

                  {formData.customizationNotes && (
                    <div className="pt-4 border-t border-brand-brown/10">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Customization</p>
                      <p className="text-sm text-gray-600 bg-white/50 p-4 rounded-xl italic">"{formData.customizationNotes}"</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-center text-gray-400">Payment methods: Credit/Debit Card, Apple Pay, Google Pay supported via secure checkout.</p>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-brand-dark text-white rounded-2xl font-semibold hover:bg-brand-brown transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Securely Complete & Pay</>
                    )}
                  </button>
                  <button type="button" onClick={prevStep} className="w-full text-gray-400 text-sm hover:text-gray-600">
                    Go back to modify
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
