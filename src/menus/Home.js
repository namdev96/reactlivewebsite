import React from "react";
import { NavLink } from "react-router-dom";
import news1 from '../images/news1.jpg';
import Common from "./Common";
const Home = () => {
  return (
   
        <>
        <Common 
         name ="Grow your business with"
         imgsrc = {news1}
         visit ="/service"
         btname ="Get Started"
        />
        </>
  );
};

export default Home;
