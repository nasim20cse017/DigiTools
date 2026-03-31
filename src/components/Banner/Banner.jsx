import React from 'react';
import { Play } from 'lucide-react';
import BannerImg from '../../assets/banner.png'

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="sm:ml-20 md:ml-40 lg:ml-0 text-left space-y-8">
            {/* Notification Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] text-[#7C3AED] text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              New: AI-Powered Tools Available
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1F2937] leading-[1.1] tracking-tight">
              Supercharge Your <br />
              <span className="text-[#1F2937]">Digital Workflow</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity 
              software—all in one place. Start creating faster today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn border-none normal-case px-8 h-14 bg-gradient-to-r from-[#7C3AED] to-[#9F67FF] text-white hover:opacity-90 rounded-full font-bold text-lg shadow-lg shadow-purple-200">
                Explore Products
              </button>
              
              <button className="btn btn-outline border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white normal-case px-8 h-14 rounded-full font-bold text-lg gap-2 group">
                <div className="bg-white group-hover:bg-purple-600 p-1 rounded-full transition-colors">
                  <Play className="w-4 h-4 fill-[#7C3AED] group-hover:fill-white" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative background blur (optional, for depth) */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              
              {/* Main Banner Image */}
              <img
                src={BannerImg} // Ensure this matches your public folder path
                alt="Digital Workflow Visualization"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square lg:aspect-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;