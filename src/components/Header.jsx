import React from 'react'

const Header = ({smallstr,head1,head2}) => {
  return (
    <div className='pb-12'>        
<p className="text-gold pt-8" >{smallstr}</p>
<h1 className="font-playfair text-white text-5xl" >
  {head1} <span className="text-gold font-jetbrains italic">{head2}</span>
</h1>
        </div>
  )
}

export default Header