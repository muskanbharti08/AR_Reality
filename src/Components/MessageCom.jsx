import React from 'react'

import Button from '@mui/material/Button';


export default function MessageCom() {
  return (
    <div className='mt-6 bg-gray-300'>
 <h1 className="text-center pt-4 ">Leave a message</h1>

        <div className="flex mt-4 flex-col sm:flex-row sm:justify-center sm:space-x-4 gap-4 sm:w-10/12 sm:mx-auto">
                <input type="text" placeholder='Full Name' className="px-2   border-2 border-gray-700/90 py-1 w-11/12 mx-auto rounded-md focus:outline-4  focus:outline-blue-400  focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder='Phone number' className="px-2   border-2 border-gray-700/90 py-1 w-11/12 mx-auto rounded-md focus:outline-4  focus:outline-blue-400 focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder='Email Address' className="px-2  border-2 border-gray-700/90  py-1 w-11/12 mx-auto  rounded-md focus:outline-4  focus:outline-blue-400 focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex flex-col items-center mt-4">

          <textarea className='w-11/12 sm:w-10/12  p-2 rounded-md' placeholder='message' name="" id="" cols="20" rows="3"></textarea>
          
          </div>

<div className="ml-4 mt-4 sm:ml-32 pb-4">
<Button variant="contained">Send Message</Button>
</div>
         
                
    </div>
  )
}
