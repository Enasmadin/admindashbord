import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import "./Navbar.scss"
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
    const{dispatch}=useContext(DarkModeContext);
  return (
    <div className='navber'>
        <div className='wrapper'>
            <div className='search'>
                <input   type='text' placeholder='search ... '/>
                <SearchIcon/>
            </div>
            <div className='items'>
                <div className='item'>
                    <LanguageIcon className='icon'/>
                     English 

                </div>
                <div className='item' >
                    <DarkModeIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>
                </div>
                <div className='item'>
                      <FullscreenExitIcon className='icon' />

                </div>
                <div className='item'>
                      <NotificationsNoneIcon className='icon'/>
                      <div className='counter'>  1 </div>

                </div>
                <div className='item'>
                      <FullscreenExitIcon className='icon'/>


                </div>
                <div className='item'>
                      <ChatBubbleOutlineIcon className='icon'/>
                      <div className='counter'>  1 </div>
                </div>
                <div className='item'>
                      <ListIcon className='icon'/>
                </div>
                <div className='item'>
                     <img   src="https://th.bing.com/th/id/OIP.WlUDXSME4D1KBxKlZEtVuwHaKA?pid=ImgDet&rs=1" alt="" className='avater'/>
                </div>
                
            

            </div>

        </div>
     
    </div>
  )
}

export default Navbar
