import React from 'react';
import { Industry } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { FileText, PhoneCall, Clock } from 'lucide-react';

const RequestQuote: React.FC = () => {
  // Convert enum to options for select
  const industryOptions = Object.values(Industry).map(industry => ({
    value: industry,
    label: industry
  }));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Filtration Solution?</h2>
            <p className="text-gray-600 mb-6">
              Our engineering team specializes in designing custom filtration solutions for unique industrial challenges.
              Request a quote today and let us help you find the perfect solution for your specific requirements.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Detailed Assessment</h3>
                  <p className="text-gray-600">
                    Our engineers work with you to understand your exact filtration requirements and operational constraints.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <PhoneCall className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Expert Consultation</h3>
                  <p className="text-gray-600">
                    Connect with our technical specialists who will guide you through the selection process.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Fast Response</h3>
                  <p className="text-gray-600">
                    Receive your detailed quote within 24-48 hours for standard requests, or custom timeline for complex solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    ?
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Not sure what you need?</h4>
                  <p className="text-sm text-gray-600">
                    Our filtration experts are available to help you identify the right solution.
                    <a href="/contact" className="ml-1 text-blue-600 hover:text-blue-800 font-medium">
                      Contact our team
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Company Name"
                  required
                  placeholder="Your company"
                />
                <Input
                  label="Contact Name"
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  label="Email Address"
                  required
                  placeholder="email@company.com"
                />
                <Input
                  type="tel"
                  label="Phone Number"
                  required
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <Select
                  label="Industry"
                  options={industryOptions}
                  placeholder="Select your industry"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Requirements<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Please describe your filtration needs, specifications, and any relevant details..."
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div>
                <Input
                  type="number"
                  label="Estimated Quantity"
                  placeholder="Enter quantity"
                  min={1}
                />
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  type="submit"
                >
                  Submit Quote Request
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our{' '}
                <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;