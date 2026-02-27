import Header from "../components/Header";
import { Link } from "react-router-dom";
import Imagecard from "../components/Imagecard";

const stats = [
  { num: "10K+", label: "Movies Available" },
  { num: "4K",   label: "Ultra HD Quality" },
  { num: "10+",  label: "Genres Covered" },
  { num: "Free", label: "Always & Forever" },
];

const features = [
  {
    icon: "🎬",
    title: "Massive Library",
    desc: "Over 10,000 curated films spanning every genre, decade, and language — updated daily with fresh releases.",
  },
  {
    icon: "⚡",
    title: "Fast Downloads",
    desc: "High-seed torrents with thousands of peers ensure you get your movie quickly, no matter the quality.",
  },
  {
    icon: "🎯",
    title: "Smart Filters",
    desc: "Filter by genre, rating, year, quality, and language. Find exactly what you want in seconds.",
  },
  {
    icon: "🖥️",
    title: "4K Ultra HD",
    desc: "From 720p to 2160p 4K HDR — every quality is available so you choose what fits your setup.",
  },
  {
    icon: "🌍",
    title: "World Cinema",
    desc: "Korean, French, Japanese, Hindi and more. CinePro celebrates cinema from every corner of the world.",
  },
  {
    icon: "♾️",
    title: "Always Free",
    desc: "No subscriptions, no paywalls, no ads. CinePro is and will always be completely free to use.",
  },
];


const About = () => {
  return (
    <div className=" bg-[#080808] text-white font-outfit pt-24  overflow-hidden">

      
      <div className="relative px-6 lg:px-24 pt-16 pb-24 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-xl" />

        
        <div className="absolute  "
          />

        <div className="relative text-center max-w-3xl mx-auto">

          <h1 className="font-playfair text-6xl lg:text-8xl font-black  mb-6">
            Cinema for <br /><span className="text-gold italic">Everyone.</span>
          </h1>
          <p className="text-stone-light text-lg  max-w-xl mx-auto">
            CinePro was built with one belief — great films should be accessible to everyone, everywhere, for free.
          </p>
        </div>
      </div>

 
      <div className="px-6 lg:px-24 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i}
              className="rounded-2xl p-8 text-center border border-stone hover:border-gold transition-all duration-200 hover:shadow-[0_0_40px_rgba(212,168,68,0.6)]"
             >
              <div className="font-playfair text-5xl font-black text-gold mb-2">{s.num}</div>
              <div className="font-jetbrains text-xs text-stone uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>


      <div className="px-6 lg:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center relative ">
          <div className="z-99">
            

                    <Header smallstr={"Our Mission"} head1={" Built for"} head2={"film lovers,"}/> 
                    


            <p className="text-gold-light leading-relaxed mb-4">
              CinePro started as a passion project — a simple idea that finding and downloading great movies should never be complicated, expensive, or exclusive.
            </p>
            <p className="text-gold-light leading-relaxed mb-4">
              We aggregate torrents from trusted sources and present them in a clean, fast, and beautiful interface. No bloat, no noise — just cinema.
            </p>
            <p className="text-gold-light leading-relaxed">
              Whether you're into Hollywood blockbusters, Korean thrillers, French new wave, or obscure cult classics — CinePro has it all, in the quality you deserve.
            </p>
          </div>
             <div className="imagecard absolute right-70 bottom-80 hidden md:inline"> 
        <Imagecard/>
      </div>

</div>
      </div>


      <div className="px-6 lg:px-24 py-16">
        <div className="text-center mb-14">

                     <Header smallstr={"WHAT WE OFFER"} head1={" Why"} head2={"Cinepro?"}/> 

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i}
              className="rounded-2xl p-7 border border-stone hover:border-gold transition-all duration-300  hover:shadow-[0_0_40px_rgba(212,168,68,0.6)] hover:-translate-y-1"
             >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">{f.title}</h3>
              <p className="text-stone-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>


      


      <div className="px-6 lg:px-24 py-24">
        <div className="rounded-3xl p-16 text-center relative overflow-hidden border border-gold"
         >
          <div className="absolute "
            />
          <div className="relative">
            <h2 className="font-playfair text-5xl lg:text-6xl font-black mb-4">
              Ready to <span className="text-gold italic">watch?</span>
            </h2>
            <p className="text-stone text-lg mb-10 max-w-md mx-auto">
              Thousands of movies, zero cost. Start browsing the full library right now.
            </p>
            <Link to="/browse"
            onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 bg-gold text-black font-bold px-10 py-4 rounded-xl text-base hover:bg-gold-light transition-all duration-300"
             >
              Browse Movies →
            </Link>
          </div>
        </div>
      </div>



    </div>
  );
};

export default About;