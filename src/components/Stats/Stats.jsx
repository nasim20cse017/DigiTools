import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#7C3AED] to-[#9F67FF] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-8 lg:gap-0">
          
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              {/* Stat Item */}
              <div className="text-center text-white px-8">
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight">
                  {stat.value}
                </h2>
                <p className="text-purple-100 text-lg font-medium opacity-90">
                  {stat.label}
                </p>
              </div>

              {/* Vertical Divider (Hidden on Mobile, Visible on Desktop) */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block h-16 w-[1px] bg-white/30 self-center"></div>
              )}
              
              {/* Horizontal Divider for Mobile (Optional) */}
              {index !== stats.length - 1 && (
                <div className="lg:hidden w-1/4 h-[1px] bg-white/20"></div>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </div>
  );
};

export default StatsSection;