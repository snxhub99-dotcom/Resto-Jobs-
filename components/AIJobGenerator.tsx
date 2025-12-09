import React, { useState } from 'react';
import { Sparkles, Copy, Loader2, Send } from 'lucide-react';
import { generateJobDescription } from '../services/geminiService';
import { LoadingState } from '../types';

const AIJobGenerator: React.FC = () => {
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [requirements, setRequirements] = useState('');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!process.env.API_KEY) {
        setResult("API Key is missing. Please configure it to use this feature.");
        setStatus(LoadingState.ERROR);
        return;
    }

    setStatus(LoadingState.LOADING);
    try {
      const desc = await generateJobDescription(role, location, salary, requirements);
      setResult(desc);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setResult('Failed to generate description. Please try again.');
      setStatus(LoadingState.ERROR);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('Copied to clipboard!');
  };

  return (
    <div id="ai-tools" className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
           <div className="inline-flex items-center justify-center p-2 bg-resto-green/10 rounded-full mb-4">
             <Sparkles className="h-6 w-6 text-resto-green mr-2" />
             <span className="text-resto-green font-semibold">AI Powered Tool</span>
           </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Free Job Post Generator</h2>
          <p className="mt-4 text-lg text-gray-500">
            Hiring? Use our AI to write the perfect WhatsApp job post in seconds.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
          <div className="p-8 md:w-1/2 bg-gray-50 border-r border-gray-100">
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Job Role</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Head Chef"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-resto-green focus:ring-resto-green p-2 border"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Indiranagar, Bengaluru"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-resto-green focus:ring-resto-green p-2 border"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700">Salary Budget</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 25k - 30k"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-resto-green focus:ring-resto-green p-2 border"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700">Requirements</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. 5 years experience, Italian cuisine expert"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-resto-green focus:ring-resto-green p-2 border"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={status === LoadingState.LOADING}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-resto-green hover:bg-resto-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-resto-green disabled:opacity-50"
              >
                {status === LoadingState.LOADING ? (
                  <><Loader2 className="animate-spin h-5 w-5 mr-2" /> Generating...</>
                ) : (
                  'Generate Job Post'
                )}
              </button>
            </form>
          </div>

          <div className="p-8 md:w-1/2 flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">Your AI Generated Post</label>
            <div className="flex-1 p-4 bg-gray-100 rounded-lg border border-gray-200 font-mono text-sm whitespace-pre-wrap overflow-y-auto max-h-[400px]">
              {result ? result : <span className="text-gray-400 italic">Fill the form and hit generate to see the magic happening here...</span>}
            </div>
            {result && (
                <div className="mt-4 flex space-x-2">
                    <button
                        onClick={copyToClipboard}
                        className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                    </button>
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(result)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
                    >
                        <Send className="h-4 w-4 mr-2" />
                        Share on WhatsApp
                    </a>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIJobGenerator;