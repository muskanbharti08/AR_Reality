import React from 'react'
import Img from './Img'
import ResidencyImj from './ResidencyImj'
import { array } from './data'

export default function Residency() {
  return (
   <>
       <ResidencyImj head="Puri Diplomatic Greens" title="Puri Diplomatic Greens"/>

       <div className="grid  sm:grid-cols-3 mx-2  sm:mx-10 gap-4 mt-8 "> 
       {
array.map((ele)=> <Img img={ele.img}  area={ele.area}  bed={ele.bed} sour= {ele.sour}   address={ele.address} price={ele.price} title = {ele.title} />)

       }
        </div>
   
   </>
  )
}
