import React from "react";
import news2 from '../images/news2.jpg';
import Common from './Common';

const About= () => {
  return (
   <>
   <Common 
   name ="Welcome to About Page"
   imgsrc = {news2}
   visit ="/contact"
   btname ="Contact Now"
   />
   </>
        
  );
};

export default About;
