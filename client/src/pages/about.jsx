

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
    // Main container with light background and default text color
    <div className="bg-light-gray-bg text-slate-800 font-sans">
      {/* "About Us" Header - Consistent with previous discussion */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-center pt-10 text-param-blue">
        About Us
      </h1>

      {/* Intro Section - Deep blue background with white text */}
      <div className="w-full flex flex-col items-center justify-center px-4 py-12 md:px-8 bg-param-blue">
        <div className="container max-w-[1200px]">
          <div className="relative z-10 text-center">
            {/* Main Headline for Intro Section */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              A Hosiery House from Mumbai, Shipping Comfort Across Borders
            </h2>
            {/* Paragraph 1 */}
            <p className="text-lg md:text-xl mb-6 text-white leading-relaxed">
              Param Impex is a uniform-focused export house based in Mumbai, India, producing and delivering customized T-shirts and soft hosiery garments to clients across Africa, the Middle East, Southeast Asia, and Europe.
            </p>
            {/* Paragraph 2 with GSM highlighted in gold */}
            <p className="text-lg md:text-xl text-white leading-relaxed">
              From choosing the right <strong className="font-bold text-param-gold">GSM (grammage)</strong> to stitching styles that match your region's preferences — we manufacture with care, scale with speed, and ship with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* What We Manufacture Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-param-blue mb-6">What We Manufacture</h2>
        {/* Section Sub-description */}
        <p className="text-lg md:text-xl text-center text-slate-700 mb-10 leading-relaxed">
          We specialize in large-scale production of hosiery-based uniforms, with branding-ready customization.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Round Neck T-Shirts Card */}
          <div className="bg-white hover:bg-light-gray-bg transition border border-gray-200 rounded-lg shadow-md hover:shadow-lg p-6 text-center transform hover:-translate-y-1">
            <img src={roundnecks} alt="Round Neck T-Shirts" className="mb-4 rounded-md w-full h-48 object-cover border border-gray-100" />
            <h3 className="text-xl font-bold text-param-blue mb-3">Round Neck T-Shirts (Unisex)</h3>
            <ul className="text-slate-700 text-left text-base leading-relaxed space-y-1">
              <li>Soft, breathable cotton/poly-cotton blends</li>
              <li>Available in 160–240 GSM</li>
              <li>Ideal for schools, events, company branding</li>
              <li>Custom logo printing or embroidery</li>
              <li>Short sleeve / long sleeve options</li>
              <li>Sizes: Kids to 5XL</li>
            </ul>
          </div>

          {/* Hosiery Bottoms & Innerwear Card */}
          <div className="bg-white hover:bg-light-gray-bg transition border border-gray-200 rounded-lg shadow-md hover:shadow-lg p-6 text-center transform hover:-translate-y-1">
            <img src={innerwear} alt="Bottoms & Innerwear" className="mb-4 rounded-md w-full h-48 object-cover border border-gray-100" />
            <h3 className="text-xl font-bold text-param-blue mb-3">Hosiery Bottoms & Innerwear</h3>
            <ul className="text-slate-700 text-left text-base leading-relaxed space-y-1">
              <li>Track pants, leggings, and shorts</li>
              <li>Institutional undergarments in 100% cotton</li>
              <li>Gym wear for schools and sports events</li>
              <li>Elasticized waistbands, comfort fit</li>
              <li>Private label support available</li>
            </ul>
          </div>

          {/* Polo T-Shirts Card */}
          <div className="bg-white hover:bg-light-gray-bg transition border border-gray-200 rounded-lg shadow-md hover:shadow-lg p-6 text-center transform hover:-translate-y-1">
            <img src={polo} alt="Polo T-Shirts" className="mb-4 rounded-md w-full h-48 object-cover border border-gray-100" />
            <h3 className="text-xl font-bold text-param-blue mb-3">Collar T-Shirts (Polo Style)</h3>
            <ul className="text-slate-700 text-left text-base leading-relaxed space-y-1">
              <li>Pique knit, honeycomb & jersey fabric options</li>
              <li>2-button and 3-button plackets</li>
              <li>Solid, contrast, or tipping collar styles</li>
              <li>Corporate and institutional color matching</li>
              <li>Branding zones on chest, sleeve, or back</li>
              <li>Sizes for men, women & unisex</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-200" /> {/* Lighter hr for better visual flow */}

      {/* Export-Ready Systems Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-param-blue mb-8">Export-Ready Systems</h2>
        <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-param-blue mb-4">T-shirts packed right. Delivered tight.</h2>
            {/* Side-by-side lists for details and documents */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Details List */}
              <div className="flex-1">
                <ul className="text-slate-700 text-base leading-relaxed space-y-1">
                  <li><strong>Pre-production samples for every new client</strong></li>
                  <li>Global size charts in inches/cm</li>
                  <li>Polybag packing, master carton labeling</li>
                  <li>Custom tags, barcode stickers, folding styles</li>
                  <li>Air & sea shipping options from Mumbai</li>
                  <li>DDU/DDP terms for seamless delivery (added from previous prompt)</li>
                </ul>
              </div>
              {/* Documents List */}
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-param-blue mb-3">Documents Provided:</h4>
                <ul className="text-slate-700 text-base leading-relaxed space-y-1">
                  <li>Commercial Invoice</li>
                  <li>Packing List</li>
                  <li>Certificate of Origin (on request)</li>
                  <li>HS Codes & technical sheet</li>
                  <li>Branded packaging (if needed)</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <img src={tshirts} alt="Export Ready Systems" className="rounded-lg shadow-md w-full max-w-md h-64 object-cover border border-gray-100 bg-white" />
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-200" /> {/* Lighter hr */}

      {/* Who We Serve Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-param-blue mb-10">Who We Serve</h2>
        {/* Grid of service categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { text: "School Uniform Distributors", image: schoolUniform },
            { text: "Corporate Buyers", image: corporateBuyers },
            { text: "Workwear Suppliers", image: workwear },
            { text: "Sports Team Managers", image: sportsManager },
            { text: "Retailers & Resellers", image: retailors },
            { text: "Promotional T-shirt Agencies", image: promotionalAgencies },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white hover:bg-light-gray-bg transition border border-gray-200 rounded-lg shadow-md hover:shadow-lg p-4 text-center text-lg text-slate-800 font-medium transform hover:-translate-y-1"
            >
              <img src={item.image} alt={item.text} className="w-full h-32 object-cover rounded-md mb-3 border border-gray-100" />
              {item.text}
            </div>
          ))}
        </div>
        {/* Concluding message */}
        <p className="text-xl text-center text-slate-700 mt-10 font-medium leading-relaxed">
          If your business needs soft, well-finished, bulk T-shirts — we're your partner.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
