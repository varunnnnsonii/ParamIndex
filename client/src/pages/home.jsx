import React from "react";
// import Carousel from "../components/carousel";
import Hero from "../components/home/hero";
import HomeAbout from "../components/home/HomeAbout";

const Home = () => {
  return (
    <div>
     
      <div>
        {/* <div>Hosiery Uniforms Made for Movement. Trusted Worldwide</div> */}
        {/* <div>Uniform T-Shirts Engineered for Everyday Performance</div> */}
        <Hero/>
        
        <HomeAbout/>
      </div>
      
    </div>
  );
};

export default Home;




