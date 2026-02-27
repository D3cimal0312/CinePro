// import { useState } from "react-router-dom";
import { useState ,useEffect} from "react";
import Header from "../components/Header";
const Screenshots = ({id}) => {
    
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading || !post){ 
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-[#66605c] border-t-[#d4a844] rounded-full animate-spin" />
      </div>
    );}
    if(!post.large_screenshot_image1){
      return(
        <Header smallstr={""} head1={"No data regarding screenshots right now"} head2={""}/>

      )
    }
  return (

    <div className="mt-16 pb-16">
        <Header smallstr={""} head1={"Screenshots"} head2={""}/>
        <div className="grid lg:grid-cols-3 gap-10">
{Array.from({ length: 3 }).map((_, i) => (
  <div key={i} className="border-2 border-stone rounded-xl overflow-hidden">
    <img src={post[`large_screenshot_image${i + 1}`]} alt="" className="hover:scale-120 transition-all duration-200 linear rounded-lg  "/>
  </div>
))}
</div>
    
    </div>

    
  )
}

export default Screenshots