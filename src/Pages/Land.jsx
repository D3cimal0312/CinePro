import React from "react";
import "./Land.css";
import "../index.css";
import Imagecard from "../components/Imagecard";
import MovieSec from "./MovieSec";
const Land = () => {
  return (
    <>
    <div className="bg-contain overflow-hidden relative bg-top bg-[url('https://plus.unsplash.com/premium_photo-1675504585830-d124a759099c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JpZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')]">
      
      <div className="text-white p-20 lg:py-40 backdrop-grayscale-[1]">
        
        <p className="backdrop-blur-md border w-fit p-2 px-6 md:mt-6 lg:text-md xl:text-lg rounded-xl border-gold bg-gold text-black font-jetbrains">
          
          &#9654; 1000+ MOVIES AVAILABLE
        </p>
        <div className="lg:mt-2 xl:mt-12 md:text-7xl xl:text-8xl font-playfair overflow-hidden z-40">
          
          <h1>Download</h1> <h1 className="text-gold">Cinema</h1>
          <h1>In HD.</h1>
          <p className="md:text-[14px] xl:text-lg font-jetbrains text-white mt-6 bg-[#00000085] w-fit p-2 ">
            
            The world's largest curated torrent library for films. <br /> Every
            genre, every decade, every quality — yours instantly.
          </p>
        </div>
        <div>
          
          <button className="bg-gold text-black text-xl p-4 px-8 mt-4 rounded-lg font-semibold">
            
            Browse Movies
          </button>
        </div>
      </div>
      <div className="imagecard absolute   md:right-50 md:bottom-100 lg:right-90 lg:bottom-140 xl:right-120 xl:bottom-160 "> 
        <Imagecard/>
      </div>

    </div>
    <MovieSec/>
    </>
  );
};
export default Land;
