import React from 'react'
import Img from './Img'
import ResidencyImj from './ResidencyImj'

export default function Residency() {
  return (
   <>
       <ResidencyImj head="Puri Diplomatic Greens" title="Puri Diplomatic Greens"/>

       <div className="grid  sm:grid-cols-3 mx-2  sm:mx-10 gap-4 mt-8 "> 
        <Img/>
        <Img/>
        <Img/>
        <Img/>
        <Img/>
        <Img/>
        </div>
   
   </>
  )
}
