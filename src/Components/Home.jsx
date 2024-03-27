import React from 'react'
import Img from './Img'
import Steper from './Steper'
import InfraHome from './InfraHome'
import AddPage from './AddPage'
import ImjComm from './ImjComm'

export default function Home() {
  return (
    <div>
<Steper/>
<h1 className="text-center items-center hover:text-blue-700 text-lg font-semibold
">Residencial Property</h1>


<div className="grid  sm:grid-cols-3 mx-2  sm:mx-10 gap-4 mt-8 "> 
        <Img/>
        <Img/>
        <Img/>
        <Img/>
        <Img/>
        <Img/>
        </div>


<div className="bg-gray-200 mt-4 py-2">
  
<InfraHome/>

</div>


<AddPage/>




<h1 className="text-center items-center hover:text-blue-700 text-lg font-semibold
">Commercial Property</h1>


<div className="grid sm:grid-cols-3 gap-4 mt-8 mx-2  sm:mx-10">

<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
<ImjComm/>
</div>



    </div>
  )
}
