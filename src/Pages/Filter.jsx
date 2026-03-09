import Card from "../components/Card";
import { useState,useEffect } from "react";
import Category from "../components/Category";

const Filter = () => {
  const [page, setPage] = useState(1);

  const [quality, setQuality] = useState("all");
  const [minRate, setMinRate] = useState(5);
  const [genre, setGenre] = useState("all");
  const [sortby, setSortby] = useState("year");
  const [orderby, setOrderby] = useState("desc");
  const [query, setQuery] = useState("");

  const sorting = [
    { title: "Top Rated", sort: "rating" },
    { title: "Newest", sort: "year" },
    { title: "Downloads", sort: "download_count" },
    { title: "Most Liked", sort: "like_count" },
  ];

  const qualities = ["all", "720p", "1080p", "2160p", "3D"];

  useEffect(() => {
    setPage(1);
  }, []);


  const Reset = () => {
    setQuery("")
    setPage(1);
    setQuality("all");
    setMinRate(5);
    setGenre("all");
    setSortby("year");
    setOrderby("desc");
    setQuery("");
  };

  return (
    <div className="flex gap-8 pt-30 pb-12">

      <div className="bg-[#0b0d12] p-8 md:w-50 lg:w-95 shrink-0">
        

        <div className="text-white flex justify-between mb-4">
          <div>🔍 Filters</div>
          <button className="text-stone-light" onClick={Reset}>
            Reset all
          </button>
        </div>

        <div className="bg-[#13151a] p-2 rounded-xl border border-stone-dim mb-2">
          <input type="text" className=" w-full border border-gold rounded-xl text-white placeholder:text-stone px-4 py-2 focus:outline-none focus:border-gold" placeholder="Search"  onChange={(e)=>setQuery(e.target.value)}/>
</div>
        <div className="bg-[#13151a] p-2 rounded-xl border border-stone-dim mb-2">
          <p className="text-stone uppercase text-xs mb-1">Sort by</p>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 p-2">
            {sorting.map((item, index) => (
              <div
                key={index}
                onClick={() => setSortby(item.sort)}
                className={`w-max p-1 px-2 border rounded-xl cursor-pointer transition-colors ${
                  sortby === item.sort
                    ? "bg-gold-dim text-gold border-gold"
                    : "border-transparent text-stone hover:text-white"
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>


        <div className="bg-[#13151a] p-2 rounded-xl border border-stone-dim mb-2">
          <p className="text-stone uppercase text-xs mb-1">Order</p>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 p-2">
            {["asc", "desc"].map((o) => (
              <div
                key={o}
                onClick={() => setOrderby(o)}
                className={`w-max p-1 px-2 border rounded-xl cursor-pointer transition-colors ${
                  orderby === o
                    ? "bg-gold-dim text-gold border-gold"
                    : "border-transparent text-stone hover:text-white"
                }`}
              >
                {o === "asc" ? "Ascending" : "Descending"}
              </div>
            ))}
          </div>
        </div>

                <div className="bg-[#13151a] p-2 rounded-xl border border-stone-dim">
          <p className="text-stone uppercase text-xs mb-1">Genre</p>
          <div className="p-2">
            <Category genre={genre} setGenre={setGenre} />
          </div>
        </div>
     


        <div className="bg-[#13151a] p-2 rounded-xl border border-stone-dim mb-2 mt-2">
          <p className="text-stone uppercase text-xs mb-1">Quality</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
            {qualities.map((q) => (
              <div
                key={q}
                onClick={() => setQuality(q)}
                className={`w-max p-1 px-2 border rounded-xl cursor-pointer transition-colors ${
                  quality === q
                    ? "bg-gold-dim text-gold border-gold"
                    : "border-transparent text-stone hover:text-white"
                }`}
              >
                {q}
              </div>
            ))}
          </div>
        </div>

 
        <div className="bg-[#13151a] p-2 rounded-xl border border-stone-dim mb-2">
          <p className="text-stone uppercase text-xs mb-1">
            Min Rating — <span className="text-gold">★ {minRate}</span>
          </p>
          <input
            type="range"
            min={0}
            max={9}
            step={1}
            value={minRate}
            onChange={(e) => setMinRate(Number(e.target.value))}
            className="w-full accent-gold"
          />
          <div className="flex justify-between text-stone text-xs px-1">
            {[0,1,2,3,4,5,6,7,8,9].map(n => <span key={n}>{n}</span>)}
          </div>
        </div>

   </div>


      <div className="w-full">
        <div>
        <Card
        page={page}
          limit={48}
          quality={quality}
          sort_by={sortby}
          order_by={orderby}
          minimum_rating={minRate}
          genre={genre}
          query={query}
        />

</div>
<div className="text-white w-full flex justify-center mt-12 font-playfair gap-8 text-2xl">
  <button onClick={()=>(page===1)?"" : setPage(page-1)} className={`${(page==1)? "text-stone-light scale-50":"" }`}>◀</button>
  <p className="text-4xl text-gold">{page}</p>
  <button onClick={()=>setPage(page+1)}>▶</button>

</div>
      </div>
    </div>
  );
};

export default Filter;