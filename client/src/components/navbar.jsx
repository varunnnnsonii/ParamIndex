// import React from "react";
// import { Link } from "react-router-dom";
// import 'flowbite';


// const Navbar = () => {
//   return (
//     <nav className="bg-white  dark:bg-gray-900 mb-8">
//       <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto py-6 px-10 mr-4"> {/* Increased py-6 and px-4 */}
//         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-12" alt="Flowbite Logo" /> Increased h-12 */}
//           <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">Param Index</span> {/* Increased text-3xl and font-bold */}
//         </Link>
//         <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg custom:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//           </svg>
//         </button>
//         <div className="hidden w-full custom:block custom:w-auto" id="navbar-default">
//           <ul className="font-medium flex flex-col p-4 custom:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 custom:flex-row custom:space-x-8 rtl:space-x-reverse custom:mt-0 custom:border-0 custom:bg-white dark:bg-gray-800 custom:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <Link to="/" className="block py-2 px-3 text-lg font-semibold text-gray-900 rounded-sm hover:bg-gray-100 custom:hover:bg-transparent custom:border-0 custom:hover:text-blue-700 custom:p-0 dark:text-white custom:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white custom:dark:hover:bg-transparent" aria-current="page">Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className="block py-2 px-3 text-lg font-semibold text-gray-900 rounded-sm hover:bg-gray-100 custom:hover:bg-transparent custom:border-0 custom:hover:text-blue-700 custom:p-0 dark:text-white custom:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white custom:dark:hover:bg-transparent">About</Link>
//             </li>
//             <li>
//               <Link to="/products" className="block py-2 px-3 text-lg font-semibold text-gray-900 rounded-sm hover:bg-gray-100 custom:hover:bg-transparent custom:border-0 custom:hover:text-blue-700 custom:p-0 dark:text-white custom:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white custom:dark:hover:bg-transparent">Products</Link>
//             </li>
           
//             <li>
//               <Link to="/enquiry" className="block py-2 px-3 text-lg font-semibold text-gray-900 rounded-sm hover:bg-gray-100 custom:hover:bg-transparent custom:border-0 custom:hover:text-blue-700 custom:p-0 dark:text-white custom:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white custom:dark:hover:bg-transparent">Enquiry</Link>
//             </li>
//             <li>
//               <Link to="/contact" className="block py-2 px-3 text-lg font-semibold text-gray-900 rounded-sm hover:bg-gray-100 custom:hover:bg-transparent custom:border-0 custom:hover:text-blue-700 custom:p-0 dark:text-white custom:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white custom:dark:hover:bg-transparent">Contact Us</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import 'flowbite';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between py-6 px-6 md:px-10">
        
        {/* Logo & Title */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* You can place a logo here */}
          <span className="text-3xl font-bold text-slate-900 dark:text-white">
            Param Impex
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/products", label: "Products" },
              { path: "/enquiry", label: "Enquiry" },
              { path: "/contact", label: "Contact Us" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block py-2 px-3 text-lg font-semibold text-slate-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition"
                >
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
