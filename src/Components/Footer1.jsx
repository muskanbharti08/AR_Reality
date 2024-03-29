import React from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';




export default function Footer1() {


        let makeColor = ({ isActive }) => {
                return isActive ? "text-orange-400 underline" : ""
        }
        return (
                <div className=''>
                        <div className="flex bg-neutral-700  p-3  flex-col space-y-5 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4 text-white">
                                <div className=" sm:w-1/5 w-11/12 p-2 mx-2 flex flex-col space-y-3  ">
                                        <div className="flex text-2xl space-x-4 ">
                                                <h1 className="text-white font-bold">About Us</h1>
                                                <h1 className=""><HorizontalRuleIcon /></h1>
                                        </div>

                                        <p className="text-gray-200">At Ar Reality pvt ltd. we understand your key concerns. This is why we are here.</p>
                                        <p className="text-gray-200">For us, it matters a lot, whether we are in a position to help you out, when it comes to locating property (residential/commercial/rent/lease) that fulfills all your prerequisites.</p>
                                </div>



                                <div className="p-2 sm:w-1/5 w-11/12 mx-auto flex flex-col space-y-3">
                                        <div className="flex text-2xl space-x-2 font-semibold">
                                                <h1 className="">Useful Links</h1>
                                                <h1 className=""><InsertLinkIcon /></h1>
                                        </div>


                                        <nav className="flex flex-col space-y-1 text-gray-200 ">
                                                <NavLink className={makeColor} to="/" ><h1 className="">Home</h1></NavLink>
                                                <NavLink className={makeColor} to="/about" ><h1 className="">About Us</h1></NavLink>
                                                <NavLink className={makeColor} to="/rproperty" ><h1 className="">Residential Property</h1></NavLink>
                                                <NavLink className={makeColor} to="/cproperty" ><h1 className="">Commercial Property</h1></NavLink>
                                                <NavLink className={makeColor} to="/dev" ><h1 className="">Our Developers</h1></NavLink>
                                                <NavLink className={makeColor} to="/contact" ><h1 className="">Contact Us</h1></NavLink>
                                        </nav>

                                </div>





                                <div className=" p-2 sm:w-1/5 w-11/12 mx-auto flex flex-col space-y-3 ">
                                        <div className="flex text-2xl space-x-2 font-semibold">
                                                <h1 className="">Latest Projects</h1>
                                                <h1 className=""><DescriptionIcon /></h1>
                                        </div>
                                        <nav className="flex flex-col space-y-1 text-gray-200">
                                                <NavLink to="/" ><h1 className="">Home</h1></NavLink>
                                                <NavLink to="/about" ><h1 className="">About Us</h1></NavLink>
                                                <NavLink to="/rproperty" ><h1 className="">Residential Property</h1></NavLink>
                                                <NavLink to="/cproperty" ><h1 className="">Commercial Property</h1></NavLink>
                                                <NavLink to="/dev" ><h1 className="">Our Developers</h1></NavLink>
                                                <NavLink to="/contact" ><h1 className="">Contact Us</h1></NavLink>
                                        </nav>
                                </div>




                                <div className=" p-2 sm:w-1/5 w-11/12 mx-auto flex flex-col space-y-4 ">
                                        <div className="flex text-2xl space-x-2 font-semibold ">
                                                <h1 className="">Contact Us</h1>
                                                <h1 className=""><SettingsPhoneIcon/></h1>
                                        </div>
                                        <div className="text-gray-200">
                                                <h1>602/610, Bajghera State Highway, Near Indian Bank, Sector 113, Gurgaon (Haryana) 122017</h1>
                                        </div>
                                        <div className="text-gray-200">
                                                <a href="tel:9717191415">9717191415</a>
                                        </div>
                                        <div className="text-gray-200">
                                                <a href="mailto:rajeevranjan2kumar@gmail.com">rajeevranjan2kumar@gmail.com</a>
                                        </div>
                                </div>






                        </div>


                        <nav className="bg-gray-200 p-2">


                                <div className="text-white">

                                        <Divider  >
                                                <Chip label="developer" size="large" />
                                        </Divider>

                                </div>

                                <div className="flex flex-row justify-center">
                                        <h1 className="text">Copyright © 2024 <span className='font-bold  ml-4 text-zinc-800 mb-2'>Muskan Bharti</span></h1>

                                </div>



                        </nav>






                </div>
        )
}
