import React from 'react'
import CropIcon from '@mui/icons-material/Crop';

import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function ImjComm({img,bname,title,address}) {
  return (
    <>
      <div className=" ">
        <div className="overflow-hidden">
        <img src={img} alt="" className="w-full hover:rotate-2 h-60 hover:origin-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
    
     </div>
        <div className="flex justify-evenly divide-x-2  divide-gray-400 divide-solid">
          <nav className="text-sm py-1"> <CropIcon />{bname}</nav>
          <nav className="text-sm pl-2 py-1">On-Going</nav>
        
        </div>

        <div className="flex justify-around my-2 sm:my-4">
          <p className="font-semibold">{title}</p>
          <p className="font-semibold">Price On Call</p>
        </div>

        <div className="flex justify-around items-center mb-6 sm:mb-6">
          <p className="text-sm"><span className='text-gray-500'><LocationOnIcon/></span>{address}</p>
          <button className='text-sm bg-blue-700 text-white font-bold p-1  rounded-l-md rounded-r-3xl pr-3 '>FOR SALE</button>
        </div>
      </div>
    </>
  )
}
