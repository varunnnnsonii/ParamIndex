
import React from "react";
import schoolUniform from "../assets/schoolUniform.jpg";
import corporateBuyers from "../assets/corporate buyers.jpg";
import workwear from "../assets/workwear.jpg";
import sportsManager from "../assets/sportsManager.jpg";
import retailors from "../assets/retailors.jpg";
import promotionalAgencies from "../assets/promotionalAgencies.jpg";
import innerwear from "../assets/bottomsInnerwears.jpg";
import polo from "../assets/collarpollo.jpg";
import tshirts from "../assets/tshirts.jpg";
import roundnecks from "../assets/roundnecks.jpg";
const AboutUs = () => {
  return (
  <div >

    <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-gray-900 text-center">About Us</h1>

    
    
    <div className=" w-full bg-gray-200 flex flex-col items-center justify-center min-h-[500px] px-4 py-8 md:px-8">
      {/* The outer div now acts as a flex container that centers its content */}

      <div className="container max-w-[1500px]">
        {/* The container class makes this div horizontally centered on the page. */}
        {/* We removed items-center from here as it's not a flex container itself. */}

        <div className="relative z-10 text-center text-black">
          {/* This div contains the text and the text-center class aligns the text. */}
          {/* All explicit mx- classes are removed to allow for natural responsive flow within the container. */}

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            A Hosiery House from Mumbai, Shipping Comfort Across Borders
          </h1>
          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-4 opacity-90"> {/* Reduced mb-10 to mb-4 for better flow */}
            Param Impex is a uniform-focused export house based in Mumbai, India, producing and delivering customized T-shirts and soft hosiery garments to clients across Africa, the Middle East, Southeast Asia, and Europe.
          </p>
          <p className="text-lg md:text-xl opacity-90"> {/* Reduced mb-10 to no mb for the last paragraph */}
            From choosing the right <strong className="font-bold">GSM (grammage)</strong> to stitching styles that match your region's preferences — we manufacture with care, scale with speed, and ship with confidence.
          </p>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 py-8">
      
      {/* About Us Section */}
    

      {/* <hr className="my-12 border-gray-300" /> */}
      <hr className="my-12 border-gray-800" />
      {/* What We Manufacture Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold  text-black leading-relaxed text-center mb-8">What We Manufacture</h2>
        <p className="text-lg md:text-xl opacity-90 text-center leading-relaxed mb-10">
          We specialize in large-scale production of hosiery-based uniforms, with branding-ready customization.
        </p>

        {/* Improved responsive layout - single column on mobile, 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Round Neck T-Shirts */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src={roundnecks}
              alt="Round Neck T-Shirts"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Round Neck T-Shirts (Unisex)</h3>
            {/* Removed list-disc */}
            <ul className="list-none text-lg md:text-xl opacity-90 leading-relaxed text-left w-full">
              <li className="mb-1">Soft, breathable cotton/poly-cotton blends</li>
              <li className="mb-1">Available in 160–240 GSM</li>
              <li className="mb-1">Ideal for schools, events, company branding</li>
              <li className="mb-1">Custom logo printing or embroidery</li>
              <li className="mb-1">Short sleeve / long sleeve options</li>
              <li className="mb-1">Sizes: Kids to 5XL</li>
            </ul>
          </div>

          {/* Hosiery Bottoms & Innerwear */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
            <img
              src={innerwear}
              alt="Hosiery Bottoms & Innerwear"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Hosiery Bottoms & Innerwear (Bulk Orders)</h3>
            {/* Removed list-disc */}
            <ul className="list-none text-lg md:text-xl opacity-90 leading-relaxed text-left w-full">
              <li className="mb-1">Track pants, leggings, and shorts</li>
              <li className="mb-1">Institutional undergarments in 100% cotton</li>
              <li className="mb-1">Gym wear for schools and sports events</li>
              <li className="mb-1">Elasticized waistbands, comfort fit</li>
              <li className="mb-1">Private label support available</li>
            </ul>
          </div>

          {/* Collar T-Shirts (Polo Style) */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src={polo}
              alt="Collar T-Shirts (Polo Style)"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Collar T-Shirts (Polo Style)</h3>
            {/* Removed list-disc */}
            <ul className="list-none text-lg md:text-xl opacity-90 leading-relaxed text-left w-full">
              <li className="mb-1">Pique knit, honeycomb & jersey fabric options</li>
              <li className="mb-1">2-button and 3-button plackets</li>
              <li className="mb-1">Solid, contrast, or tipping collar styles</li>
              <li className="mb-1">Corporate and institutional color matching</li>
              <li className="mb-1">Branding zones on chest, sleeve, or back</li>
              <li className="mb-1">Sizes for men, women & unisex</li>
            </ul>
          </div>

        </div>
      </div>

      <hr className="my-12 border-gray-800" />

      {/* Export-Ready Systems Section */}
      <h2 className="text-3xl font-bold  text-black leading-relaxed text-center mb-8">Export-Ready Systems</h2>
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between mb-16 gap-8">
        
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-semibold  text-black leading-relaxed mb-4">T-shirts packed right. Delivered tight.</h2>
          
          {/* New flex container for side-by-side lists */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Div 1: Pre-production samples list */}
            <div className="flex-1">
              <ul className="list-none text-lg md:text-xl opacity-90 leading-relaxed mb-6 pl-0">
                <li className="mb-1"><strong className="font-semibold">Pre-production samples for every new client</strong> </li>
                <li className="mb-1">Global size charts in inches/cm</li>
                <li className="mb-1">Polybag packing, master carton labeling</li>
                <li className="mb-1">Custom tags, barcode stickers, folding styles</li>
                <li className="mb-1">Air & sea shipping options from Mumbai</li>
              </ul>
            </div>

            {/* Div 2: Documents Provided list */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Documents Provided:</h3>
              <ul className="list-none text-lg md:text-xl opacity-90 leading-relaxed pl-0">
                <li className="mb-1">Commercial Invoice</li>
                <li className="mb-1">Packing List</li>
                <li className="mb-1">Certificate of Origin (on request)</li>
                <li className="mb-1">HS Codes & technical sheet</li>
                <li className="mb-1">Branded packaging (if needed)</li>
              </ul>
            </div>
          </div> {/* End of side-by-side lists container */}

        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          {/* Room for an image related to "Export-Ready Systems" */}
          <img
            src={tshirts}
            alt="Export Ready Systems"
            className="rounded-lg shadow-md w-full max-w-md h-64 object-cover"
          />
        </div>
      </div>

      {/* <hr className="my-12 border-gray-300" /> */}
      <hr className="my-12 border-gray-800" />
      {/* Who We Serve Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold  text-black leading-relaxed text-center mb-8">Who We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { text: "School Uniform Distributors", image: schoolUniform },
            { text: "Corporate Buyers", image: corporateBuyers },
            { text: "Workwear Suppliers", image: workwear },
            { text: "Sports Team Managers", image: sportsManager },
            { text: "Retailers & Resellers", image: retailors },
            { text: "Promotional T-shirt Agencies", image: promotionalAgencies },
          ].map((item, index) => (
            <div key={index} className="bg-gray-200 rounded-lg shadow-sm p-4 text-center text-lg text-black leading-relaxed font-medium">
              <img 
                src={item.image} 
                alt={item.text}
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              {item.text}
            </div>
          ))}
        </div>
        <p className="text-xl  text-black  text-center leading-relaxed mt-10 font-medium">
          If your business needs soft, well-finished, bulk T-shirts — we're your partner.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;