import { SPA_NAME, SPA_ADDRESS, SPA_EMAIL, SPA_PHONE, SPA_HOURS, FACEBOOK_URL, INSTAGRAM_URL } from '@/src/constants';
import { Instagram, Facebook, Phone, Mail, MapPin, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-beige pt-16 pb-8 px-6 border-t border-brand-brown/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold text-brand-brown">{SPA_NAME}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Premium wellness spa specializing in therapeutic head spa treatments and professional massage services.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-brand-brown hover:bg-brand-brown hover:text-white transition-all shadow-sm">
                <Instagram size={18} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-brand-brown hover:bg-brand-brown hover:text-white transition-all shadow-sm">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-dark">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/#services" className="hover:text-brand-brown transition-colors">Our Services</a></li>
              <li><a href="/#about" className="hover:text-brand-brown transition-colors">About Us</a></li>
              <li><a href="/#faq" className="hover:text-brand-brown transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4" id="contact">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-dark">Visit Us</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-brand-brown shrink-0" />
                <span>{SPA_ADDRESS}</span>
              </div>
              <div className="flex items-center text-brand-brown bg-brand-cream/50 p-3 rounded-xl border border-brand-brown/10 mt-2">
                <Info size={16} className="mr-2 shrink-0" />
                <p className="text-[11px] leading-snug">Note: We are located inside another shop. The door is locked for security. Please call <strong>{SPA_PHONE}</strong> when you arrive and we will open it for you.</p>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-brand-brown shrink-0" />
                <span>{SPA_PHONE}</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-brand-brown shrink-0" />
                <span>{SPA_EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-dark">Business Hours</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p className="flex justify-between"><span>Mon - Sun:</span> <span>9:00 AM - 7:00 PM</span></p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-brown/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} {SPA_NAME}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-brown">Privacy Policy</a>
            <a href="#" className="hover:text-brand-brown">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
