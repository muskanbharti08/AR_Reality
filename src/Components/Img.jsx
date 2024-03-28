import React, { useState } from 'react'
import CropIcon from '@mui/icons-material/Crop';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import { NavLink } from 'react-router-dom';
import Order from './Order';

export default function Img({img,area,bed,sour,address,price}) {

let [clk,setClk] = useState(false);

let clickKro= ()=>{
  setClk(true)
}

  return (
    <>
    <div className=" ">
        <div className="overflow-hidden">
        <img src={img} alt="" className="w-full hover:rotate-2  hover:origin-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 h-60 duration-300" />
    
     </div>
        <div className="flex justify-evenly divide-x-2 divide-gray-400 divide-solid">
          <nav className=""> <CropIcon /> {area} Sq.Ft.</nav>
          <nav className=""><BedIcon />{bed}</nav>
          <nav className=""><ShowerIcon />{sour}</nav>
        </div>

        <div className="flex justify-around my-4">
          <p className="">{address}</p>
          <p className="">&#x20b9; {price}</p>
        </div>

        <div className="flex justify-around mb-2">
          <p className="text-sm">Sector - 111, Dwarka Expressway</p>
         
        

         <button onClick={clickKro} className='text-sm bg-blue-700 text-white font-bold p-1  rounded-l-md rounded-r-3xl pr-3 '>FOR SALE</button>
        
       
       
        </div>
      </div>
    </>
  )
}
