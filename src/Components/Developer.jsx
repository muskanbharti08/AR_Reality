import React from 'react'
import ResidencyImj from './ResidencyImj'
import Brand from './Brand'
import { brandArray } from './branddata';

import { Link } from 'react-router-dom';
export default function Developer() {
  return (
    <div>

      <ResidencyImj head = "Our Clients"  title = "Home - our clients"  />


      <div className="grid  grid-cols-3 sm:grid-cols-6 gap-4 mt-4 w-11/12 mx-auto">

        
       {
       brandArray.map((ele)=><Brand img = {ele}/>)
       }
      
      </div>


      <div className="flex flex-col items-center space-y-2 space-x-0 divide-y-2 sm:divide-y-0 divide-blue-700  sm:flex-row justify-center  sm:space-x-3 mt-4 sm:divide-x-4 sm:divide-red-950">
        <Link to="/rproperty" className=''>RESIDENTIAL</Link>
        <Link to='/cproperty' className='pl-3'>COMMERCIAL</Link>
        <Link className='pl-3'>RETAIL SHOP</Link>
        <Link className='pl-3'>FARMLANDS</Link>
      </div>
    </div>
  )
}
