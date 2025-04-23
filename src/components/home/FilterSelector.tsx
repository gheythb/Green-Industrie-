import React, { useState } from 'react';
import { ChevronRight, Filter } from 'lucide-react';
import { Category, Industry } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

const FilterSelector: React.FC = () => {
  const [step, setStep] = useState(1);
  
  // Convert enum to options for select
  const categoryOptions = Object.values(Category).map(category => ({
    value: category,
    label: category
  }));
  
  const industryOptions = Object.values(Industry).map(industry => ({
    value: industry,
    label: industry
  }));

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Filter Solution</h2>
          <p className="text-gray-600">
            Use our interactive tool to find the ideal filtration solution based on your specific requirements.
            Answer a few questions about your needs and we'll recommend the best options.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md max-w-4xl mx-auto overflow-hidden">
          {/* Progress indicator */}
          <div className="bg-gray-100 p-4">
            <div className="flex items-center justify-between max-w-xl mx-auto">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                  1
                </div>
                <span className="text-xs mt-1">Industry</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                  2
                </div>
                <span className="text-xs mt-1">Application</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                  3
                </div>
                <span className="text-xs mt-1">Specifications</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 4 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                  4
                </div>
                <span className="text-xs mt-1">Results</span>
              </div>
            </div>
          </div>

          {/* Form content */}
          <div className="p-8">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Tell us about your industry</h3>
                <p className="text-gray-600">
                  Selecting your industry helps us understand your specific filtration needs and requirements.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Select Your Industry"
                    options={industryOptions}
                    placeholder="Choose an industry"
                    required
                  />
                  
                  <Input
                    label="Application Description (Optional)"
                    placeholder="Brief description of your application"
                  />
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button
                    variant="primary"
                    onClick={() => setStep(2)}
                  >
                    Continue <ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Filter Category & Application</h3>
                <p className="text-gray-600">
                  Select the type of filter you're looking for and provide details about your application.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Filter Category"
                    options={categoryOptions}
                    placeholder="Select filter type"
                    required
                  />
                  
                  <Input
                    label="Process Flow Rate"
                    placeholder="e.g., 50 GPM"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Application Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your filtration needs, contaminants to be removed, and any specific requirements..."
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setStep(3)}
                  >
                    Continue <ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Technical Specifications</h3>
                <p className="text-gray-600">
                  Provide technical details to help us recommend the most suitable filter options.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Operating Pressure"
                    placeholder="e.g., 100 PSI"
                  />
                  
                  <Input
                    label="Operating Temperature"
                    placeholder="e.g., 150°F"
                  />

                  <Input
                    label="Required Filtration Level"
                    placeholder="e.g., 5 microns"
                  />
                  
                  <Input
                    label="Fluid Viscosity (if applicable)"
                    placeholder="e.g., 100 cSt"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Material compatibility requirements, certifications needed, other technical specifications..."
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setStep(4)}
                  >
                    Find Matches <Filter className="ml-1 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Filter className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">We've Found Your Matches!</h3>
                  <p className="text-gray-600 mt-2">
                    Based on your specifications, we've identified the following filter solutions.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-lg">3 Perfect Matches Found</h4>
                    <a href="/products?matched=true" className="text-blue-600 hover:text-blue-800 font-medium">
                      View All Matches
                    </a>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                            <img
                              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt="Industrial Water Filter"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold">Industrial Water Filtration System</h5>
                          <p className="text-sm text-gray-600">Perfect for your manufacturing process requirements</p>
                          <div className="mt-2">
                            <span className="text-blue-600 font-bold">$1,299.99</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <Button
                            variant="primary"
                            size="sm"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                            <img
                              src="https://images.pexels.com/photos/162568/oil-industry-power-radio-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt="Hydraulic Filter"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold">High-Pressure Hydraulic Filter</h5>
                          <p className="text-sm text-gray-600">Meets your pressure and flow requirements</p>
                          <div className="mt-2">
                            <span className="text-blue-600 font-bold">$179.99</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <Button
                            variant="primary"
                            size="sm"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Need Expert Assistance?</h4>
                  <p className="text-gray-600 mb-4">
                    Our technical team can help you find the perfect solution or design a custom filter for your specific needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="secondary"
                    >
                      Contact Technical Support
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      Start New Search
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSelector;