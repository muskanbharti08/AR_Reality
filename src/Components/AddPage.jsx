import React from 'react'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function AddPage() {
        return (
                <div className='h-52 flex flex-col space-y-6 items-center bg-no-repeat bg-cover bg-[url("https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?auto=compress&cs=tinysrgb&w=600")] '>

                        <h1 className="text-center text-xl mt-8 mx-2 font-bold text-white sm:mx-40">
                                We are one of the leading property consultants in India and deal in <span className='text-yellow-500'>Residential, Commercial, Plot</span> in India
                        </h1>

                        <div className=" flex space-x-4">
                                <a href="tel:+9190399823887"><button className="bg-blue-500 rounded-md p-2"><PhoneForwardedIcon/><span className="pl-2">Call Now</span></button></a>
                                <a href=""><button className="bg-blue-500  rounded-md p-2"><WhatsAppIcon/> <span className='pl-1'>  Whatsapp Chat Now</span></button>
                        </a>
                                </div>


                </div>
        )
}
