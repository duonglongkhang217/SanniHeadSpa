import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Calendar, Clock, CheckCircle, XCircle, MoreVertical, Search, Filter } from 'lucide-react';
import { SERVICES } from '@/src/constants';

// Mock data for initial view
const mockBookings = [
  { id: '1', customerName: 'Alice Johnson', serviceId: 'therapeutic-head-spa', date: '2026-05-01', timeSlot: '10:00', status: 'confirmed', total: 120 },
  { id: '2', customerName: 'Bob Smith', serviceId: 'hair-wash-massage', date: '2026-05-01', timeSlot: '11:00', status: 'pending', total: 160 },
  { id: '3', customerName: 'Charlie Brown', serviceId: 'royal-rejuvenation', date: '2026-05-02', timeSlot: '14:00', status: 'confirmed', total: 220 },
  { id: '4', customerName: 'Diana Prince', serviceId: 'classic-massage', date: '2026-05-03', timeSlot: '16:00', status: 'cancelled', total: 100 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Total Bookings', value: '124', icon: <Calendar className="text-blue-500" /> },
    { label: 'Active Customers', value: '86', icon: <Users className="text-green-500" /> },
    { label: 'Pending Requests', value: '12', icon: <Clock className="text-yellow-500" /> },
    { label: 'Monthly Revenue', value: '$8,420', icon: <CheckCircle className="text-purple-500" /> },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-display font-semibold text-brand-dark">Admin Dashboard</h1>
          <p className="text-gray-500">Manage your business, bookings, and customer relationships.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">{stat.icon}</div>
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-brand-dark mt-1">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex bg-gray-50 p-1 rounded-xl">
              <button 
                onClick={() => setActiveTab('bookings')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'bookings' ? 'bg-white shadow-sm text-brand-brown' : 'text-gray-500'
                }`}
              >
                Appointments
              </button>
              <button 
                onClick={() => setActiveTab('customers')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'customers' ? 'bg-white shadow-sm text-brand-brown' : 'text-gray-500'
                }`}
              >
                Customers
              </button>
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search bookings..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-brown/20 focus:bg-white transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Date & Time</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {mockBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-brand-beige flex items-center justify-center text-brand-brown font-bold text-xs mr-3">
                          {booking.customerName.charAt(0)}
                        </div>
                        <span className="font-medium text-sm">{booking.customerName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                        {SERVICES.find(s => s.id === booking.serviceId)?.name}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xs">
                        <p className="font-medium">{booking.date}</p>
                        <p className="text-gray-400">{booking.timeSlot}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-brand-dark">${booking.total}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${
                        booking.status === 'confirmed' ? 'bg-green-50 text-green-600' :
                        booking.status === 'pending' ? 'bg-yellow-50 text-yellow-600' :
                        'bg-red-50 text-red-600'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-brand-dark transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400">
            <p>Showing 4 of 24 results</p>
            <div className="flex gap-2">
              <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
              <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
