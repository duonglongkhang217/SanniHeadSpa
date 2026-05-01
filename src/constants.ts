import { ServicePackage } from './types.ts';

export const SPA_NAME = 'SanniHeadSpa';
export const SPA_ADDRESS = '420 Canterbury Road, Campsie 2194';
export const SPA_PHONE = '0432 025 301';
export const SPA_EMAIL = 'sannyheadspa@gmail.com';
export const SPA_HOURS = {
  monday: '9:00 AM - 7:00 PM',
  tuesday: '9:00 AM - 7:00 PM',
  wednesday: '9:00 AM - 7:00 PM',
  thursday: '9:00 AM - 7:00 PM',
  friday: '9:00 AM - 7:00 PM',
  saturday: '9:00 AM - 7:00 PM',
  sunday: '9:00 AM - 7:00 PM',
};

export const INSTAGRAM_URL = 'https://www.instagram.com/sanniheadspa/';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61583797049354&sk=about';

export const SERVICES: ServicePackage[] = [
  {
    id: 'therapeutic-head-spa',
    name: 'Therapeutic Head Spa',
    duration: 60,
    price: 120,
    description: 'A deep scalp cleansing and relaxation treatment designed to reduce stress and improve hair health.',
    includes: ['Deep cleansing', 'Scalp massage', 'Aromatherapy', 'Conditioning']
  },
  {
    id: 'hair-wash-massage',
    name: 'Hair Washing & Massage Combo',
    duration: 90,
    price: 160,
    description: 'Combination of our signature hair washing and a full back and shoulder massage.',
    includes: ['Hair wash', 'Head massage', '30 min back massage', '30 min shoulder massage']
  },
  {
    id: 'royal-rejuvenation',
    name: 'Royal Rejuvenation',
    duration: 120,
    price: 220,
    description: 'The ultimate luxury experience combining head spa, foot massage, and full body relaxation.',
    includes: ['Premium head spa', '30 min foot massage', '60 min full body massage']
  },
  {
    id: 'classic-massage',
    name: 'Classic Relaxation Massage',
    duration: 60,
    price: 100,
    description: 'Traditional relaxation massage focusing on releasing tension and promoting overall well-being.',
    includes: ['Full body massage', 'Choice of essential oils']
  },
  {
    id: 'quick-refresh',
    name: 'Quick Refresh',
    duration: 45,
    price: 85,
    description: 'Perfect for a busy schedule, focusing on the head and neck areas.',
    includes: ['Express head spa', 'Neck & shoulder massage']
  }
];

// Generate time slots from 9:00 AM to 6:30 PM (last appointment start) in 5-minute increments
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 19; hour++) {
    for (let min = 0; min < 60; min += 5) {
      if (hour === 18 && min > 30) break; // Don't start a significant appointment 15 mins before close
      const h = hour.toString().padStart(2, '0');
      const m = min.toString().padStart(2, '0');
      slots.push(`${h}:${m}`);
    }
  }
  return slots;
};

export const TIME_SLOTS = generateTimeSlots();
