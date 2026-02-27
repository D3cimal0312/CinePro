import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Microdetail from "../components/Microdetail";
import NextPage from "../components/NextPage";
import "./Land.css";

import Cast from "../components/Cast";
import Screenshots from "../components/Screenshots";
import DownloadTorrents from "../components/DownloadTorrents";



const Detailedcard = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const [like,setLike]=useState(false);
  useEffect(() => {
    const fetchpost = async () => {
      try {
        const res = await fetch(
          `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`,
        );
        if (!res.ok) throw new Error("data is not available");
        const data = await res.json();
        setPost(data.data.movie);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchpost();
  }, [id]);

  if (loading || !post) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-[#66605c] border-t-[#d4a844] rounded-full animate-spin" />
      </div>
    );
  }



  return (
    <div className="pt-30 text-white p-12">
      <div onClick={() => Navigate(-1)} className="w-fit cursor-pointer">
        <NextPage btnstr={"◄  Back"} style={"stone"} />
      </div>

      <div className="pt-12 flex  gap-16 flex-wrap">
        <div className="relative">
          <img
            src={post.medium_cover_image}
            alt=""
            className="border border-stone rounded-lg h-105"
          />
          <div className="absolute top-0 right-15 ">
            <span className="relative h-fit " onClick={()=>setLike(!like)}>
              <p className={`absolute text-6xl ${like? "text-gold":""} flex justify-center items-center`}>
              
              ♥
                
                <p className={`absolute text-xs  text-black  font-bold pt-2 `}>
                  {like? post.like_count+1 : post.like_count}
                  </p>
                </p>
             
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:lg-full lg:w-2/3 text-stone">
          <h1 className="font-playfair text-5xl text-white">
            {post.title_long} 
          </h1>

          <Microdetail
            year={post.year}
            runtime={post.runtime}
            language={post.language}
          />

          <div className="flex gap-8 items-center">
            <p className="text-gold bg-[#0f1116]  p-2 px-4 border border-gold rounded-lg text-3xl">
              ★ {post.rating?.toFixed(1)}
              <span className="text-lg text-stone align-top">/10</span>
            </p>

            <div id="genre" className="flex gap-2  h-fit ">
              {post.genres?.map((gen, index) => (
                <div
                  key={index}
                  className="border border-stone rounded-lg text px-2 word-"
                >
                  {gen}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xl ">
            <span className="block text-2xl font-semibold pb-2">Synopsis</span>
            {post.description_full ||
              post.description_intro ||
              "No description available."}
          </p>
          <div className="flex gap-8 pt-4">

                        <a
              href={`https://www.youtube.com/watch?v=${post.yt_trailer_code}`}
              target="_blank"
              rel="noreferrer"
            >
            <NextPage btnstr={"► Watch Trailer"} style={"black"} bg={"gold"} />

     </a>



            <a
              href={`https://www.imdb.com/title/${post.imdb_code}`}
              target="_blank"
              rel="noreferrer"
            >
              <NextPage btnstr={"IMDb →"} style={"stone"} />
            </a>
          </div>
        </div>
      </div>
      <div className=" border-b border-stone">
        <Screenshots id={post.id} />
      </div>
      <div className=" border-b border-stone">
        <Cast cast={post.cast} />
      </div>

            <div className=" border-b border-stone pb-12">
        <DownloadTorrents tor={post.torrents}/>
      </div>
    </div>
  );
};

export default Detailedcard;
