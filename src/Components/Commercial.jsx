import React from 'react'
import ResidencyImj from './ResidencyImj'
import ImjComm from './ImjComm'
import { array2 } from './data2'

export default function Commercial() {
  return (
    <div>
      <ResidencyImj head  = "Commercial Property"  title = "- Commercial Property"   />
      <div className="grid sm:grid-cols-3 gap-4 mt-8 mx-2  sm:mx-10">
{
    array2.map((ele)=>  <ImjComm img={ele.img} area ={ele.area} bname={ele.bName} title = {ele.title} address = {ele.address}  price = {ele.price} />)
}

        </div>

    </div>
  )
}
