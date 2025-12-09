import React from 'react';
import { ArrowRight, Briefcase, UserPlus } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hospitality Staffing</span>{' '}
                <span className="block text-resto-green xl:inline">Partner</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                End-to-end manpower solutions PAN-India. We connect premium restaurants and cafes with skilled professionals, from Chefs to Managers.
              </p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="https://wa.me/919845445223?text=Hi,%20I%20am%20looking%20to%20hire%20staff%20for%20my%20restaurant."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-resto-green hover:bg-resto-green-dark md:py-4 md:text-lg transition-all transform hover:scale-105"
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Hire Staff Now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://wa.me/919980856523?text=Hi,%20I%20am%20looking%20for%20a%20job%20in%20hospitality."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-resto-green bg-green-100 hover:bg-green-200 md:py-4 md:text-lg transition-all"
                  >
                    <Briefcase className="w-5 h-5 mr-2" />
                    Apply for Jobs
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Restaurant kitchen staff working"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:via-white/0"></div>
      </div>
    </div>
  );
};

export default Hero;