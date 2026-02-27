import React from 'react'

const NextPage = ({btnstr ,style,bg}) => {
  return (
    <div>
        <div className={`border px-4 py-2 w-fit rounded-lg  ${"text-"+style}   ${"bg-"+bg} font-bold`} >{btnstr}</div>
    </div>
  )
}

export default NextPage