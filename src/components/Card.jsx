import { useEffect, useState } from "react";
import "../Pages/Land.css";
import { Link } from "react-router-dom";
import Microdetail from "./Microdetail";

const Card = ({
  limit = 20,
  page = 1,
  quality = "all",
  minimum_rating = 6,
  genre = "all",
  sort_by = "year",
  order_by = "desc",
}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  


  const fulllink = `https://movies-api.accel.li/api/v2/list_movies.json?limit=${limit}&page=${page}&quality=${quality}&minimum_rating=${minimum_rating}&sort_by=${sort_by}&order_by=${order_by}&genre=${genre}`;

  useEffect(() => {
    setLoading(true);
    const fetchpost = async () => {
      try {
        const res = await fetch(fulllink);
        if (!res.ok) throw new Error("Data not available");
        const alldata = await res.json();
        setPosts(alldata.data.movies || []);
      } catch (err) {
        console.error(err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchpost();
  }, [fulllink]);


 

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center w-full">
        <div className="w-10 h-10 border-2 border-[#66605c] border-t-[#d4a844] rounded-full animate-spin" />
      </div>
    );
  }

  
  

  return (
    <div className="flex flex-wrap gap-x-5 text-stone gap-y-8 w-full justify-center">
      {posts.map((movie) => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          onClick={() => window.scrollTo(0, 0)}
          className="relative"
        >
          <div className="cardbase relative border border-stone w-64 rounded-2xl bg-[#12151c] h-105 hover:border-t-2 hover:border-gold hover:shadow-[0_0_40px_rgba(212,168,68,0.6)] transition-all duration-200 ease-linear">
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                className="w-full rounded-t-2xl h-75 card_img"
              />
            </div>

            <div className="flex flex-wrap gap-4 absolute pl-4 qbox">
              {movie.torrents.map((t, index) => (
                <div
                  key={index}
                  className="px-2 rounded-lg text-[#12151c] font-bold bg-gold quality opacity-100"
                >
                  {t.quality}
                </div>
              ))}
            </div>

            <p className="absolute top-5 right-5 text-gold bg-[#0f1116] p-1 px-2 border border-gold rounded-lg z-5">
              ★ {movie.rating.toFixed(1)}
            </p>

            <div className="img_detail_card p-4 pb-2 rounded-b-2xl flex flex-col justify-between h-27">
              <h3 className="font-bold text-white line-clamp-2">{movie.title}</h3>
              <Microdetail
                year={movie.year}
                runtime={movie.runtime}
                language={movie.language}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;