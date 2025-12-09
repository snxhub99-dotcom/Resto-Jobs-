import React, { useState } from 'react';
import { MapPin, Phone, Mail, Upload, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    setUploadStatus('uploading');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('contact', contact);
    formData.append('resume', file);

    try {
      const response = await fetch("https://formspree.io/f/xanrdkzp", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setUploadStatus('success');
        setFile(null);
        setName('');
        setContact('');
      } else {
        console.error("Form submission failed");
        setUploadStatus('error');
      }
    } catch (error) {
      console.error("Form submission error", error);
      setUploadStatus('error');
    }
  };

  return (
    <div id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-resto-orange" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p className="font-medium text-gray-900">Resto Jobs Office</p>
                  <p>15th Main Road, 4th Block</p>
                  <p>Koramangala, Bengaluru, Karnataka 560034</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-resto-orange" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p className="font-medium text-gray-900">For Clients (Hiring)</p>
                  <a href="tel:9845445223" className="hover:text-resto-green">9845445223</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-resto-green" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p className="font-medium text-gray-900">For Candidates (Jobs)</p>
                  <a href="tel:9980856523" className="block hover:text-resto-green">99808 56523</a>
                  <a href="tel:9901564523" className="block hover:text-resto-green">99015 64523</a>
                </div>
              </div>

               <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <a href="mailto:support@restrohub.link" className="hover:text-resto-green">support@restrohub.link</a>
                </div>
              </div>
            </div>

            {/* Resume Upload Form */}
            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Your Resume</h3>
              {uploadStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center p-4 bg-green-50 rounded-md border border-green-100">
                  <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                  <p className="text-green-800 font-medium">Application Sent!</p>
                  <p className="text-sm text-green-600 mb-3">We have received your resume and will contact you shortly.</p>
                  <button 
                    onClick={() => setUploadStatus('idle')}
                    className="text-sm font-semibold text-resto-green hover:underline"
                  >
                    Send another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleUpload} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-resto-green focus:ring-resto-green p-2 border"
                      placeholder="e.g. Rahul Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Phone Number / Email</label>
                    <input 
                      type="text" 
                      id="contact" 
                      name="contact"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-resto-green focus:ring-resto-green p-2 border"
                      placeholder="e.g. 9876543210"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>

                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:bg-gray-100 transition-colors cursor-pointer relative bg-white">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-resto-green hover:text-resto-green-dark focus-within:outline-none">
                          <span>Upload Resume</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                      {file ? (
                        <p className="text-sm font-semibold text-gray-900 mt-2 flex items-center justify-center">
                           <CheckCircle className="h-4 w-4 text-green-500 mr-1"/> {file.name}
                        </p>
                      ) : (
                        <p className="text-sm text-gray-400 mt-2">No file selected</p>
                      )}
                    </div>
                  </div>

                  {uploadStatus === 'error' && (
                    <div className="flex items-center text-red-600 text-sm bg-red-50 p-2 rounded">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Something went wrong. Please try again later.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!file || !name || !contact || uploadStatus === 'uploading'}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed items-center"
                  >
                    {uploadStatus === 'uploading' ? (
                       <><Loader2 className="animate-spin h-4 w-4 mr-2" /> Sending...</> 
                    ) : (
                       'Submit Application'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
            <iframe 
                src="https://maps.google.com/maps?q=15th+Main+Road,+4th+Block,+Koramangala,+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Resto Jobs Location"
                className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;