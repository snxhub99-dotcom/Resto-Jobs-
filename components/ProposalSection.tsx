import React from 'react';
import { CheckCircle, FileText, Clock, Shield, AlertTriangle } from 'lucide-react';

const ProposalSection: React.FC = () => {
  return (
    <div id="pricing" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-resto-green font-semibold tracking-wide uppercase">Transparency & Trust</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Recruitment Services Proposal 2025–2026
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A subsidiary of SNX HUB Business Consulting LLP. We provide end-to-end staffing solutions tailored to your needs.
          </p>
        </div>

        {/* Pricing/Service Modules */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Module 1 */}
          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow bg-gray-50 relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 bg-resto-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                STANDARD
             </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Module 1 – Standard Replacement</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-resto-green">50%</span>
              <span className="ml-2 text-gray-600 font-medium">of 1st month's salary</span>
            </div>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Free Replacement: <strong>45 Days</strong> warranty.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Applicable if candidate leaves within 45 days.</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Payment due on joining day.</span>
              </li>
            </ul>
          </div>

          {/* Module 2 */}
          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow bg-white border-resto-green/20 flex flex-col">
            <div className="absolute top-0 right-0 bg-resto-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg hidden md:block">
                PREMIUM
             </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Module 2 – Extended Replacement</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-resto-green">100%</span>
              <span className="ml-2 text-gray-600 font-medium">of 1st month's salary</span>
            </div>
             <ul className="space-y-4 flex-grow">
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-resto-green mr-2 flex-shrink-0" />
                <span className="text-gray-600">Free Replacement: <strong>90 Days</strong> warranty.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-resto-green mr-2 flex-shrink-0" />
                <span className="text-gray-600">Extended security for critical roles.</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-resto-green mr-2 flex-shrink-0" />
                <span className="text-gray-600">Payment due on joining day.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Terms & Conditions Grid */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="mr-2 h-6 w-6 text-gray-500" />
            Key Terms & Conditions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-600">
             <div className="bg-white p-4 rounded-lg shadow-sm">
               <strong className="block text-gray-900 mb-2">Commission Payment</strong>
               <p>Full commission is payable on the candidate’s joining day. Late/non-payment results in immediate termination of services.</p>
             </div>
             <div className="bg-white p-4 rounded-lg shadow-sm">
               <strong className="block text-gray-900 mb-2">Replacements Policy</strong>
               <p>Free replacements apply only if paid by due date. Absconding must be reported within the replacement period.</p>
             </div>
             <div className="bg-white p-4 rounded-lg shadow-sm">
               <strong className="block text-gray-900 mb-2">Feedback Loop</strong>
               <p>Feedback must be provided within 24 hours of trial period. Sourcing pauses until feedback is shared.</p>
             </div>
             <div className="bg-white p-4 rounded-lg shadow-sm">
               <strong className="block text-gray-900 mb-2">Background Verification</strong>
               <p>We verify ID proofs. Police verification is optional (20-day process, ₹3,500 extra).</p>
             </div>
             <div className="bg-white p-4 rounded-lg shadow-sm">
               <strong className="block text-gray-900 mb-2">Responsibilities</strong>
               <p>Candidates sourced based on skills/experience. Client responsible for monitoring behavior after appointment.</p>
             </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
               <strong className="block text-gray-900 mb-2">No Advances</strong>
               <p>We do not facilitate or recommend providing advance payments to candidates directly.</p>
             </div>
          </div>
          <div className="mt-6 flex items-start p-4 bg-orange-50 rounded-md text-orange-800 text-sm">
              <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
              <p>Requesting direct references from our placed candidates will incur additional charges.</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-resto-green text-white rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div>
                     <h3 className="text-2xl font-bold mb-4">Ready to Hire? Next Steps:</h3>
                     <ol className="list-decimal list-inside space-y-2 text-green-100 text-lg">
                        <li>Fill out our Recruitment Requirement Checklist.</li>
                        <li>Sign and stamp the agreement.</li>
                        <li>Share documents via Email or WhatsApp.</li>
                        <li>We commence sourcing immediately!</li>
                     </ol>
                </div>
                 <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-col sm:flex-row gap-4">
                     <a href="https://wa.me/919980856523?text=I%20want%20to%20sign%20the%20agreement." target="_blank" rel="noreferrer" className="bg-white text-resto-green hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors text-center shadow-lg">
                         Contact to Start
                     </a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProposalSection;