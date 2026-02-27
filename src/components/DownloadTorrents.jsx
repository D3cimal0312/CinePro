import React from "react";
import Header from "./Header";

const DownloadTorrents = ({ tor }) => {
  console.log(tor, "torr");
  return (
    <div >
      <Header smallstr={""} head1={"Download"} head2={"Torrents"} />

      <div className=" flex gap-8 flex-wrap ">
        {tor.map((item, i) => (
          <div key={i} className="border border-stone rounded-lg p-4  lg:w-1/3 flex sm:h-fit xl:h-62 flex-col gap-4  hover:border-gold hover:border-t-6 hover:-translate-y-4 transition-all duration-250 linear">
            <div className=" flex justify-between">
              <p className="md:text-3xl text-5xl text-gold font-playfair">{item.quality}</p>
              <p className="border px-2 h-fit rounded-lg text-[16px] text-stone bg-stone-dim capitalize">
                {item.type}
              </p>
            </div>


            <div className="flex justify-between font-jetbrains text-stone text-md">



              <div>
                <p>SIZE</p>
                <p className="text-white">{item.size}</p>
              </div>

              <div>
                <p>SEEDS</p>
                <p className="text-green-500">▲ {item.seeds}</p>
              </div>

              <div>
                <p>PEERS</p>
                <p className="text-blue-500">▼ {item.peers}</p>
              </div>



            </div>
                


            <div className="text-stone flex gap-4 flex-wrap">
                <p className="border px-2  rounded-lg  bg-stone-dim ">{item.video_codec}</p>
                <p className="border px-2  rounded-lg  bg-stone-dim">Audio {item.audio_channels}ch</p>
                <p className="border px-2  rounded-lg  bg-gold text-black font-bold">{item.date_uploaded.split(" ")[0]}</p>
            </div>


<a href={`${item.url}`}>
    <button className="bg-gold w-full hover:bg-gold-light py-2 rounded-lg md:text-xl xl:text-2xl text-white font-jetbrains mb-2">
        ⬇Download <span className="font-outfit">{item.quality}</span>
    </button>
</a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadTorrents;
