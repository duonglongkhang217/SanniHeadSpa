export type ServicePackage = {
  id: string;
  name: string;
  duration: number; // in minutes
  price: number;
  description: string;
  includes: string[];
};

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export type Booking = {
  id: string;
  userId?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceId: string;
  date: string; // ISO string
  timeSlot: string; // e.g. "10:00"
  totalPrice: number;
  customizationNotes?: string;
  status: BookingStatus;
  createdAt: string;
};

export type UserProfile = {
  id: string;
  email: string;
  displayName: string;
  role: 'admin' | 'customer';
};
