import React from 'react'

export default function MessageCom() {
  return (
    <div className='mt-6 bg-gray-300'>
 <h1 className="text-center">Leave a message</h1>

        <div className="flex justify-center space-x-4">
                <input type="text" placeholder='Full Name' className="px-2 py-1 rounded-md focus:outline-4  focus:outline-blue-400  focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder='Phone number' className="px-2 py-1 rounded-md focus:outline-4  focus:outline-blue-400 focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder='Email Address' className="px-2 py-1 rounded-md focus:outline-4  focus:outline-blue-400 focus:ring-2 focus:ring-blue-500" />
          </div>
                 <textarea name="" id="" cols="30" rows="10"></textarea>
      
    </div>
  )
}
