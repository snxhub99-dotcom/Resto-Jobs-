import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 md:hidden z-40 flex justify-between space-x-3">
      <a
        href="tel:9980856523"
        className="flex-1 flex items-center justify-center px-4 py-2 border border-resto-green text-resto-green rounded-md font-medium text-sm bg-white"
      >
        <Phone className="h-4 w-4 mr-2" />
        Call Us
      </a>
      <a
        href="https://wa.me/919980856523"
        className="flex-1 flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md font-medium text-sm hover:bg-green-700"
      >
        <MessageCircle className="h-4 w-4 mr-2" />
        WhatsApp
      </a>
    </div>
  );
};

export default StickyCTA;