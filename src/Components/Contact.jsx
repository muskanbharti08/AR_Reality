import React from 'react'
import ResidencyImj from './ResidencyImj'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import MessageCom from './MessageCom';

export default function Contact() {
  return (
   <>
   <ResidencyImj head = "Contact Us "  title="Home - Contact Us "/>

<div className="flex justify-center space-x-4 text-center mt-4">
  <div className="1 w-52 ">
    <HomeIcon/>
    <h1 className="">adress</h1>
    <h1 className="text-sm text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, tenetur!</h1>
  </div>
  <div className="2 w-52 ">
  <h1 className=""><CallIcon/></h1>
    <h1 className="">Phone</h1>
    <h1 className="text-xs hover:text-blue-600 text-gray-500 "><a href='tel:+919798688'>4651324553</a></h1>

  </div>
  <div className="3 w-52 ">
  <h1 className=""><EmailIcon/></h1>
    <h1 className="">Email</h1>
    <h1 className="text-sm text-gray-500 hover:text-blue-600"><a href="mailto:abc@gmail.com">abc@gmail.com</a></h1>

  </div>


</div>

<MessageCom/>



   </>
  )
}
