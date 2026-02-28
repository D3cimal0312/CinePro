import { useState, useEffect } from "react";

const Category = ({ genre, setGenre }) => {
  const [genres, setGenres] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(
          `https://movies-api.accel.li/api/v2/list_movies.json?limit=50`
        );
        const data = await res.json();

        const genreSet = new Set();
        data.data.movies.forEach((movie) => {
          movie.genres?.forEach((g) => genreSet.add(g));
        });
        setGenres([...genreSet].sort()); 
      } catch (err) {
        console.error("Error fetching genres:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  const update = (item) => {

      setGenre(item); 
    
  };

  if (loading)
    return (
      <div className="w-full flex justify-center py-2">
        <div className="w-5 h-5 border-2 border-[#66605c] border-t-[#d4a844] rounded-full animate-spin" />
      </div>
    );

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 md:gap-x-8 xl:gap-x-16 gap-y-2">
      {genres.map((item, index) => (
        <div
          key={index}
          onClick={() => update(item)}
          className={`w-max p-1 px-2 border rounded-xl cursor-pointer transition-colors ${
            genre===item
              ? "bg-gold-dim text-gold border-gold"
              : "border-transparent text-stone hover:text-white"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Category;