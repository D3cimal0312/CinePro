import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../Pages/Land.css'
const Imagecard = () => {
    const [posts,setPosts]=useState([]);
        const [loading,setLoading]=useState(true);
    const [limit,setLimit]=useState(3);
    
        useEffect(()=>{
    const fetchpost=async ()=>{
      try{
const res = await fetch(`https://movies-api.accel.li/api/v2/list_movies.json?limit=${limit}`);
        // console.log(res);
        if(!res.ok) throw new Error("data is not available atm");
        const alldata=await res.json();
        setPosts(alldata.data.movies);
      }
      catch(err){
        console.log(err);
      }
      finally{
        setLoading(false);
      }
    };
    
    fetchpost();
        },[]);
        // console.log(posts)
  return (
<div className='absolute'>
  {posts.map((item, index) => (
<Link key={item.id} to={`movies/${item.id}`} className="absolute">
  <div
    style={{ backgroundImage: `url('${item.large_cover_image}')` }}
    className={`sm:h-50 sm:w-25 lg:h-100 lg:w-75 bg-cover bg-center rounded-2xl md:-left-5 border-2 border-stone absolute z-2 hover:z-4 
      
      ${index === 0 ? "md:rotate-20 md:left-25 sm:-left-32" : ""} 
      ${index === 1 ? "md:-left-30 md:-rotate-20 md:-top-10 sm:left-22" : ""} 
      hover:shadow-[5px_5px_30px_rgba(400,400,40,1)]
      transition duration-100 ease-linear`}
  >
  </div>
</Link>
  ))}
</div>
  )
}

export default Imagecard