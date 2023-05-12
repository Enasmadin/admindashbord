import React from 'react';
import "./wediget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';

const Wediget = ({type}) => {
    let data ;
    let amount = 1000;
    let diff = 50 ;
    switch(type){
       case"users":
       data={
           title:"users",
           ismoney:false,
           link:"see all users ",
           icon:<PersonIcon  className='icon' style={{ color:"crimson" ,backgroundColor:"rgba(255,0,0,0.2)"}}/>
       }
       break;
       case"order":
       data={
           title:"ORDERS",
           ismoney:false,
           link:"View all orders  ",
           icon:<ShoppingCartIcon  className='icon' style={{ backgroundColor:"rgba(218,165,32,0.2)",color:"goldenrod" }}/>
       }
       break;
       case"earning":
       data={
           title:"EARNING",
           ismoney:true,
           link:"View all earning  ",
           icon:<PublicIcon  className='icon' style={{ backgroundColor:"rgba(0,128,0,0.2)" ,color:"green" }}/>
       }
       break;
       case"balance":
       data={
           title:"BALANCE",
           ismoney:true,
           link:"see all balance  ",
           icon:<AccountBalanceIcon  className='icon' style={{ backgroundColor:"rgba(128,0,128,0.2)" ,color:"purple"}}/>
       }
       break;
       default:
        break

     }
  return (
    <div className='wediget'>
           <div className='left'>
             <span className='title'>
                     { data.title }
             </span>
             <span className='counter'>
                     {data.ismoney && "&"}
                       {amount}
                    
             </span>
             <span className='link'>
                   {data.link}
             </span>

           </div>
        
        
            <div className='right'> 
               <div className='precentege positive'>
                <KeyboardArrowUpIcon/>
                    {diff}%
               </div>
               <div  className='icon'>
                     {data.icon}
               </div>

            </div>
        
        </div>
    
  )
}

export default Wediget
