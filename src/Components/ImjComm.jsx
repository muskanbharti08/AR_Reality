import React from 'react'
import CropIcon from '@mui/icons-material/Crop';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
export default function ImjComm() {
  return (
    <>
      <div className=" ">
        <div className="overflow-hidden">
        <img src="https://climbinfra.com/main-images/projects/ats/slider-1.jpg" alt="" className="w-full hover:rotate-2  hover:origin-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
    
     </div>
        <div className="flex justify-evenly divide-x-2  divide-gray-400 divide-solid">
          <nav className="text-sm py-1"> <CropIcon />Retail Shop, Cinema</nav>
          <nav className="text-sm pl-2 py-1">On-Going</nav>
        
        </div>

        <div className="flex justify-around my-2 sm:my-4">
          <p className="">Puri Diplomatic Greens</p>
          <p className="">&#x20b9; 20000</p>
        </div>

        <div className="flex justify-around items-center mb-6 sm:mb-6">
          <p className="text-sm">Sector - 111, Dwarka Expressway</p>
          <button className='text-sm bg-blue-700 text-white font-bold p-1  rounded-l-md rounded-r-3xl pr-3 '>FOR SALE</button>
        </div>
      </div>
    </>
  )
}
