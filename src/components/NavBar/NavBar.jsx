import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Logo Section */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks.map((link) => (
                <li key={link.name}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>
          <a className="text-3xl font-extrabold text-[#7C3AED] cursor-pointer tracking-tight">
            DigiTools
          </a>
        </div>

        {/* Center Navigation (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-[#1F2937] font-medium hover:text-[#7C3AED] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Actions Section */}
        <div className="navbar-end gap-2">
          {/* Cart Icon */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {/* Badge hidden if empty, but here for future use */}
              {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
            </div>
          </button>

          {/* Login Link */}
          <a className="btn btn-ghost normal-case font-semibold text-[#1F2937] hover:bg-transparent hover:text-[#7C3AED]">
            Login
          </a>

          {/* Get Started Button */}
          <button className="btn border-none normal-case px-6 bg-gradient-to-r from-[#7C3AED] to-[#9F67FF] text-white hover:opacity-90 rounded-full font-bold">
            Get Started
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;