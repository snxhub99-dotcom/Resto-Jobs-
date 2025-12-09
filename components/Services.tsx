import React from 'react';
import { ChefHat, Coffee, Utensils, Users, ClipboardList, ShieldCheck } from 'lucide-react';

const roles = [
  {
    title: 'Restaurant Managers',
    icon: <ClipboardList className="h-8 w-8 text-resto-orange" />,
    desc: 'Experienced leadership for smooth operations.',
  },
  {
    title: 'Executive Chefs',
    icon: <ChefHat className="h-8 w-8 text-resto-orange" />,
    desc: 'Culinary experts to elevate your menu.',
  },
  {
    title: 'Baristas & Bartenders',
    icon: <Coffee className="h-8 w-8 text-resto-orange" />,
    desc: 'Skilled beverage professionals.',
  },
  {
    title: 'Service Staff',
    icon: <Utensils className="h-8 w-8 text-resto-orange" />,
    desc: 'Waiters, captains, and stewards.',
  },
  {
    title: 'Housekeeping',
    icon: <ShieldCheck className="h-8 w-8 text-resto-orange" />,
    desc: 'Maintaining hygiene and cleanliness.',
  },
  {
    title: 'Front Office',
    icon: <Users className="h-8 w-8 text-resto-orange" />,
    desc: 'Hosts and receptionists for great first impressions.',
  },
];

const Services: React.FC = () => {
  return (
    <div id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-resto-green font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Staffing Solutions for Every Role
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide verified and trained professionals for all departments of your hospitality business.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {roles.map((role) => (
              <div key={role.title} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-50 text-white">
                  {role.icon}
                </div>
                <div className="ml-16">
                  <dt className="text-lg leading-6 font-medium text-gray-900">{role.title}</dt>
                  <dd className="mt-2 text-base text-gray-500">{role.desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 text-center">
             <a
                href="https://wa.me/919845445223?text=I%20need%20staff%20urgently."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-resto-orange hover:bg-resto-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-resto-orange"
              >
                🔥 Need Staff? WhatsApp Us
              </a>
        </div>
      </div>
    </div>
  );
};

export default Services;