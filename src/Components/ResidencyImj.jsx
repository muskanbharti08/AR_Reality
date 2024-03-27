import React from 'react'

export default function ResidencyImj({head,title}) {
  return (
        <div className="w-full flex flex-col  justify-center z-0 
        items-center h-64 bg-[url('https://climbinfra.com/main-images/projects/puri/puri-diplomatic-greens.jpg')] bg-cover">

          <h1 className='font-bold text-white text-3xl z-50 brightness-200'>{head}</h1>
          <p className="text-white ">Home <span className='text-yellow-400'>{title}</span></p>
       </div>
  )
}
