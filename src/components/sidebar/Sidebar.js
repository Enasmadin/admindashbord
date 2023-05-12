import React, { useContext } from 'react';
import "./Sidbar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';



const Sidebar = () => {
    const{dispatch}=useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link  to="/" style={{textDecoration:"none" }}>
            <span  className='logo'> Madina </span>
            </Link>
          
           
        </div>
        <hr/>
        <div  className='center'>
            <ul>
                <p className='title'> MAIN </p>
                
                <li>
                    <DashboardIcon className='icon'/>
                    <span> Dashbord </span>
                  
                </li>
                <p className='title'>LISTS </p>
                <Link  to="/users" style={{textDecoration:"none" }}>
                <li>
                    <PeopleOutlineOutlinedIcon className='icon'/>
                    <span> Users </span>
                </li>
                </Link>
                <Link  to="/products" style={{textDecoration:"none" }}>
                <li>
                    <AddBusinessOutlinedIcon className='icon'/>
                    <span> Product </span>
                </li>
                </Link>
                <li>
                    <BookOutlinedIcon className='icon'/>
                    <span> Orders </span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className='icon'/>
                    <span> Delivery </span>
                </li>
                <p className='title'>USEFULL </p>
                <li>
                    <EqualizerOutlinedIcon className='icon'/>
                    <span> Status </span>
                </li>
                <li>
                    <NotificationsOutlinedIcon className='icon'/>
                    <span> Notifications </span>
                </li>
                <p className='title'> SERVICE </p>
                <li>
                    <ListAltOutlinedIcon className='icon'/>
                    <span> system health </span>
                </li>
                <li>
                   <PsychologyOutlinedIcon className='icon'/>
                    <span> Logs </span>
                </li>
                <li>
                    <SettingsSuggestOutlinedIcon className='icon'/>
                    <span> Settings  </span>
                </li>
                <p className='title'>USER </p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span> profile  </span>
                </li>
                
                <li>
                    <LoginOutlinedIcon className='icon'/>
                    <span> Logout  </span>
                </li>
            </ul>

        </div>
        <div className='bottom'>
            <div  className='colorOption' onClick={()=>dispatch({type:"LIGHT"})}>   </div>
            <div  className='colorOption'  onClick={()=>dispatch({type:"DARK"})}>   </div>
            
        </div>
       
    </div>
  )
}

export default Sidebar
