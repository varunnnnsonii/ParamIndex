import React from 'react'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <div className='mt-10  '>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 leading-tight text-black text-center'>About Us</h1>
        <div className='bg-white flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16  px-5'>

        {/* Left Section: Text Content */}
        {/* Takes full width on small screens, half width on large screens */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left p-4'>
          {/* Headline for the About Us content, using h1 as requested */}
          {/* Note: Semantically, it's generally best practice to have only one <h1> per page for the main title.
              Since there's already an <h1> "About Us" at the top, consider if this should be an <h2> for better document structure.
              However, this implementation uses <h1> as per your explicit request. */}
          <h1 className='text-3xl md:text-4xl font-bold mb-6 leading-tight text-black'>
            Crafting Comfort, Delivering Quality.
          </h1>

          {/* Descriptive paragraph */}
          <p className='text-lg md:text-xl text-black leading-relaxed mb-8'>
            At Param Impex, we specialize in manufacturing and exporting high-quality round neck & collar T-shirts, made from breathable, skin-friendly hosiery fabrics. Designed for schools, corporates, industrial use, sportswear, and retail distributors — our garments are built for daily wear, bulk orders, and repeat performance.
          </p>

          {/* Call-to-action button */}
          <div className=''>
            <Link to="/about">
            <button  className='bg-black text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition duration-300'>
              Learn More About Us
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        {/* Takes full width on small screens, half width on large screens */}
        <div className='w-full lg:w-1/3 p-4 flex justify-center lg:justify-start'>
          <img
            src="https://placehold.co/600x400/000000/FFFFFF?text=Param+Index+T-Shirts" // Placeholder image: Replace with your actual image URL
            alt="Param Impex T-shirts for schools, corporates, and sportswear"
            className='w-full max-w-lg lg:max-w-none h-auto object-cover rounded-[50px] lg:rounded-none lg:rounded-tr-[50px] lg:rounded-br-[50px] shadow-lg'
            // className='w-full max-w-lg  lg:max-w-none h-auto object-cover rounded-tr-[50px] rounded-br-[50px] shadow-lg' // Rounded corners on top-right and bottom-right
          />
        </div>
      </div>
    </div>
  )
}

export default HomeAbout


