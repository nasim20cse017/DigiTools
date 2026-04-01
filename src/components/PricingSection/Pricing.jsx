import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [pricingPlans, setPricingPlans] = useState([]);

  const loadPricingData = async () => {
    if (pricingPlans.length > 0) return;
    const response = await fetch('./PricingData.json');
    const data = await response.json();
    setPricingPlans(data);
  };

  // Trigger data load
  loadPricingData();

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Pricing Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-center items-stretch">
          {pricingPlans.map((plan) => {
            const isPro = plan.planName === "Pro";

            return (
              <div
                key={plan.id}
                className={`relative p-10 rounded-[2.5rem] transition-all duration-300 border ${
                  isPro
                    ? "h-150 bg-[#7C3AED] text-white border-[#7C3AED] shadow-2xl  z-10 flex flex-col flex-1"
                    : "h-150 bg-white text-[#1F2937] border-gray-100 shadow-sm hover:shadow-md flex flex-col flex-1"
                }`}
              >
                {/* Most Popular Tag */}
                {plan.tag && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFEDD5] text-[#92400E] px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap border border-[#FED7AA]">
                    {plan.tag}
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 text-left">{plan.planName}</h3>
                <p className={`text-sm mb-8 text-left ${isPro ? "text-purple-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-extrabold">${plan.price}</span>
                  <span className={`text-lg capitalize ${isPro ? "text-purple-200" : "text-gray-400"}`}>
                    /{plan.duration}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-10 text-left flex flex-col flex-1">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 ${isPro ? "text-white" : "text-green-500"}`} />
                      <span className={`text-sm font-medium ${isPro ? "text-purple-50" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`btn w-full rounded-2xl h-14 font-bold border-none normal-case text-lg transition-transform active:scale-95 ${
                    isPro
                      ? "bg-white text-[#7C3AED] hover:bg-gray-50"
                      : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;