import React, { useState, useEffect } from "react";  // ✅ add these
import "./Land.css";
import "../index.css";
import Imagecard from "../components/Imagecard";
import MovieSec from "./MovieSec";
import { Link } from "react-router-dom";

import '@mantine/core/styles.css';  
import '@mantine/carousel/styles.css';

import { Carousel } from '@mantine/carousel';
import NextPage from "../components/NextPage";


const Land = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchpost = async () => {
      try {
        const res = await fetch(`https://movies-api.accel.li/api/v2/list_movies.json?limit=${limit}`);
        if (!res.ok) throw new Error("data is not available atm");
        const alldata = await res.json();
        setPosts(alldata.data.movies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchpost();
  }, []);

  return (
    <>
      {!loading && (
        <Carousel  
      height={700}
      slideGap=""
      controlsOffset="xl"
      controlSize={60}
      withControls
      withIndicators
      emblaOptions={{
        loop: true,

        align: 'center'
      }}>
          {posts.map((movie) => (
            <Carousel.Slide key={movie.id}>
              <div
                className="w-full h-full relative bg-cover bg-center "
                style={{ backgroundImage: `url(${movie.background_image})` }}
              >

                <div className="absolute inset-0 bg-black/60" />

      
                <div className="absolute inset-0 flex items-end p-10 text-white  py-30 px-25">
                  <div className="flex gap-12 items-start">
                    <img
                      src={movie.medium_cover_image}
                      alt={movie.title}
                      className="ml-12 rounded-lg shadow-lg"
                    />
                    <div>
                      <p className="text-yellow-400 text-sm  tracking-widest mb-1">
                        {movie.genres?.join(" · ")}
                      </p>
                      <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
                      <p className="text-gray-300 text-sm">
                        {movie.year} · <span className="text-gold text-2xl">★</span> {movie.rating} · {movie.runtime} min
                      </p>
                      <div className="mt-2">
                        <p>{movie.summary}</p>
                      </div>
                      <div className="mt-8">
          
         <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          onClick={() => window.scrollTo(0, 0)}
          className="relative"
        >
            <button className="bg-yellow-400 text-black text-3xl p-4 px-8  rounded-lg font-bold">
              Watch Now
            </button>

          </Link>
        </div>
                    </div>
                  </div>


                               
                </div>

              </div>
            </Carousel.Slide>
          ))}
          
        </Carousel>
        
      )}
                  {/* <div className="absolute top-50 right-130">

                  <Imagecard />

                  </div> */}




      <MovieSec />
    </>
  );
};

export default Land;