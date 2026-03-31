import React from 'react';
import { User, Box, Rocket } from 'lucide-react';

const GetStarted = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: <User className="w-10 h-10 text-[#7C3AED]" />,
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: <Box className="w-10 h-10 text-[#7C3AED]" />,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: <Rocket className="w-10 h-10 text-[#7C3AED]" />,
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1F2937] mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative group p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-24 h-24 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;