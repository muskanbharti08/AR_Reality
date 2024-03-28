import React from 'react'
import Img from './Img'
import Steper from './Steper'
import InfraHome from './InfraHome'
import AddPage from './AddPage'
import ImjComm from './ImjComm'
import Project from './Project'
import { array } from './data'
import { array2 } from './data2'

export default function Home() {
  return (
    <div>
      <div className="mt-5  ">
        <Steper />
      </div>
      <h1 className="text-center items-center hover:text-blue-700 text-lg font-semibold
">Residencial Property</h1>


    
<div className="grid  sm:grid-cols-3 mx-2  sm:mx-10 gap-4 mt-8 "> 
       {
array.map((ele)=> <Img img={ele.img}  area={ele.area}  bed={ele.bed} sour= {ele.sour}   address={ele.address} price={ele.price} />)

       }
        </div>


      <div className="bg-gray-200 mt-4 py-2">

        <InfraHome />

      </div>


      <AddPage />




      <h1 className="text-center items-center hover:text-blue-700 text-lg font-semibold
">Commercial Property</h1>

<div className="grid sm:grid-cols-3 gap-4 mt-8 mx-2  sm:mx-10">
{
    array2.map((ele)=>  <ImjComm img={ele.img} area ={ele.area} bname={ele.bName} title = {ele.title} address = {ele.address}  price = {ele.price} />)
}

        </div>

<Project/>



    </div>
  )
}
