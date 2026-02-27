import React from 'react'

const Microdetail = ({year,runtime,language}) => {
  return (
    <div className='flex gap-4 text-stone'>
        <span>{year}</span>
                <span>
                  {runtime > 59
                    ? Math.floor(runtime / 60) +
                      "hr " +
                      (runtime % 60) +
                      "m"
                    : runtime + "m"}
                </span>

                  <span className="border border-stone p-1 rounded-lg text-gold leading-none ">
                    {language || "en"}
                  </span>
                
                
    </div>
  )
}

export default Microdetail