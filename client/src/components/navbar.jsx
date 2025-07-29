
import React from "react";
import { Link } from "react-router-dom";
import 'flowbite';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between py-6 px-6 md:px-10">
        
        {/* Logo & Title */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* You can place a logo here */}
          <span className="text-3xl font-bold text-slate-900">
            Param Impex
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/products", label: "Products" },
              { path: "/contact", label: "Contact Us" },
              { path: "/enquiry", label: "Enquiry" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block py-2 px-3 text-lg font-semibold text-slate-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
