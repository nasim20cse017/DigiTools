import React from 'react';

const Workflow = () => {
    return (
    <section className="w-full bg-gradient-to-r from-[#7C3AED] to-[#9F67FF] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="btn bg-white hover:bg-gray-100 text-[#7C3AED] border-none px-10 h-14 rounded-full font-bold text-lg normal-case shadow-xl">
            Explore Products
          </button>
          
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#7C3AED] px-10 h-14 rounded-full font-bold text-lg normal-case">
            View Pricing
          </button>
        </div>

        <div className="text-purple-200 text-sm font-medium flex flex-wrap justify-center gap-x-6 gap-y-2 opacity-80">
          <span>14-day free trial</span>
          <span>•</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>Cancel anytime</span>
        </div>

      </div>
    </section>
    );
};

export default Workflow;