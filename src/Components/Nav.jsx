import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import RoofingIcon from '@mui/icons-material/Roofing';

export default function Nav() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
   <nav className="bg-blue-200 font-bold  py-2">
         <div className="flex justify-around  items-center text-sm">
        <div className="text-xl font-bold"><a className='text-blue-700'>A</a>r <a className='text-blue-700'>r</a><a>e</a><a className='text-blue-700'>a</a><a className=''>l</a><a className="text-blue-700">i</a><a>t</a><a className='text-blue-700'>y</a> <p className="text-sm ml-1 font-semibold">pvt ltd. <RoofingIcon/></p></div>
        <div className=" justify-center space-x-5 text-gray-500  hidden sm:flex">
                <NavLink className={({isActive})=> isActive?"text-blue-800 underline":""} to="/">Home</NavLink>
                <NavLink className={({isActive})=> isActive?"text-blue-800 hover:underline":"" }      to="/about">About us</NavLink>
                <NavLink className={({isActive})=> isActive?"text-blue-800 underline":"" }     to="/rproperty">Residential Property</NavLink>
                <NavLink className={({isActive})=> isActive?"text-blue-800 underline":"" }     to="/cproperty">Commercial Property</NavLink>
                <NavLink className={({isActive})=> isActive?"text-blue-800 underline":"" }     to="/dev">Our Developers</NavLink>
                <NavLink className={({isActive})=> isActive?"text-blue-800 underline":"" }     to="/contact">Contact us</NavLink>
        </div>

     <div className="forphone sm:hidden">
     <Button onClick={toggleDrawer(true)}><DehazeIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 450 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {
        ['home', 'about', 'Residential Property', 'Commercial Property','Our Developers','contact'].map((text, index) => (
         <Link to={`/${text=="Residential Property"?"rproperty":text=="Commercial Property"?"cproperty":text=="Our Developers"?"dev":text}`}> <ListItem key={text} disablePadding>
         <ListItemButton>
           <ListItemIcon>
             
             {   index==0?<HomeIcon/>:""}
               
               { index==1?<InfoIcon/>:""}

           </ListItemIcon>
           <ListItemText primary={text} />
         </ListItemButton>
       </ListItem></Link>
        ))
        }
      </List>
   
     
    </Box>
      </Drawer>
     </div>


         </div>
   </nav>
  )
}
