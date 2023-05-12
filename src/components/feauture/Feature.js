import React from 'react';
import "./Feauture.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Feature = () => {
  return (
    <div className='feuture'>
        <div  className='top'>
            <h1 className='title'>  Total Revenue </h1>
            <MoreVertIcon fontSize='small'/>
        </div> 
        <div  className='bottom' >
           <div  className='feautureChart'>

           <CircularProgressbar value={50} text={"70%"}  strokeWidth={5}/>
           </div>

              <p className='amount'>  $420</p>
              <p  className='desc'>
                   previous transition processing. last payments payment included   
              </p>
                <div  className='sumerry'>
                    <div  className='item'>
                        <div  className='itemtTarget'> Target  </div>
                        <div  className='itemResult negitve '>
                            <KeyboardArrowDownIcon  fontSize='small'/>
                           <div  className='resultAmount'>
                                 $12.4k
                           </div>
                        </div>
                    </div>
                    <div  className='item'>
                        <div  className='itemtTarget'> Last Weak  </div>
                        <div  className='itemResult positve '>
                            <KeyboardArrowUpIcon  fontSize='small'/>
                           <div  className='resultAmount'>
                                 $12.4k
                           </div>
                        </div>
                    </div>
                    <div  className='item'>
                        <div  className='itemtTarget'> Last Month   </div>
                        <div  className='itemResult positve'>
                            <KeyboardArrowUpIcon  fontSize='small'/>
                           <div  className='resultAmount'>
                                 $12.4k
                           </div>
                        </div>

                    </div>
                </div>

           
       </div>

  </div>
   
  )
}

export default Feature
