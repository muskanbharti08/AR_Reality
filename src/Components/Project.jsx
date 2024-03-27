import React from 'react'
import RoofingIcon from '@mui/icons-material/Roofing';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


export default function Project() {
        return (
                <div className='flex h-56 bg-zinc-800 text-center text-white justify-center gap-4 items-center flex-col sm:flex-row sm:justify-center sm:space-x-4'>
                        <div className="">
                                <h1 className=""><RoofingIcon/>30 +</h1>
                                <h1 className="">Complete Project</h1>
                        </div>
                        <div className="">
                                <h1 className="">
<TrendingUpIcon/>750 +</h1>
                                <h1 className="">Property Sold</h1>
                        </div>
                        <div className="">
                                <h1 className=""><GroupAddIcon/>730 +</h1>
                                <h1 className="">Happy Clients</h1>
                        </div>

                </div>
        )
}
