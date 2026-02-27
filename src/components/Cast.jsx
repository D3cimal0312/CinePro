import React from 'react'
import Header from './Header'
const Cast = ({cast}) => {
    console.log(cast,"cast list")
  return (
    <div>
        <div className='mb-12'>
            <Header smallstr={""} head1={"Casts"} head2={""} />
            <div className='flex gap-12 flex-wrap'>
     {cast?.map((item, index) => (
                   <a
              href={`https://www.imdb.com/name/nm${item.imdb_code}/`}
              target="_blank"
              rel="noreferrer"
            key={index} >
          <div className=" w-24 text-center hover:cursor-pointer">
            <img
              src={item.url_small_image || "https://imgs.search.brave.com/m12gFeEaYTH9TW9JHo1E4K4UFZBIAGpFdv-O_jdbty0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQ2LzgzLzk2/LzM2MF9GXzM0Njgz/OTY4M182bkFQemJo/cFNrSXBiOHBtQXd1/ZmtDN2M1ZUQ3d1l3/cy5qcGc"} 
              alt={item.name}
              className="w-25 h-25 rounded-full  border-3 border-stone mx-auto hover:border-gold transition-all"
             
            />
            <p className="text-white text-xs font-medium mt-2 line-clamp-2">{item.name}</p>
            <p className="text-stone-light font-jetbrains text-xs mt-0.5 ">{item.character_name}</p>
          </div>
          </a>
        ))}
</div>
        </div>
    </div>
  )
}

export default Cast