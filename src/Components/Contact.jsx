import React from 'react'
import ResidencyImj from './ResidencyImj'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import MessageCom from './MessageCom';

export default function Contact() {
  return (
   <>
   <ResidencyImj head = "Contact Us "  title="- Contact Us "      />

<div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:space-x-4 text-center mt-4 sm:items-center">
  <div className="1 w-72">
    <HomeIcon/>
    <h1 className="">address</h1>
    <h1 className="text-sm text-gray-500 hover:text-gray-700 ">602/610, Bajghera State Highway, Near Indian Bank, Sector 113, Gurgaon (Haryana) 122017</h1>
  </div>
  <div className="2 w-52 sm:flex sm:flex-col sm:space-y-1 ">
  <h1 className=""><CallIcon/></h1>
    <h1 className="">Phone</h1>
    <h1 className="text-xs hover:text-blue-600 text-gray-500 "><a href='tel:+919717191415'>9717191415</a></h1>

  </div>
  <div className="3 w-52 sm:flex sm:flex-col sm:space-y-1">
  <h1 className=""><EmailIcon/></h1>
    <h1 className="">Email</h1>
    <h1 className="text-sm text-gray-500 hover:text-blue-600"><a href="mailto:rajeevranjan2kumar@gmail.com">rajeevranjan2kumar@gmail.com</a></h1>

  </div>


</div>

<MessageCom/>



   </>
  )
}
