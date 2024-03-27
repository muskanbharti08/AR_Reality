import React from 'react'
import ResidencyImj from './ResidencyImj'
import Brand from './Brand'

import { Link } from 'react-router-dom';
export default function Developer() {
  return (
    <div>

      <ResidencyImj head = "Our Clients"  title = "Home - our clients"  />


      <div className="grid  grid-cols-3 sm:grid-cols-6 gap-4 mt-4 mx-2">

        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
      </div>


      <div className="flex justify-center space-x-3 mt-4 divide-x-4 divide-red-950">
        <Link to="/rproperty">RESIDENTIAL</Link>
        <Link to='/cproperty' className='pl-3'>COMMERCIAL</Link>
        <Link className='pl-3'>RETAIL SHOP</Link>
        <Link className='pl-3'>FARMLANDS</Link>
      </div>
    </div>
  )
}
