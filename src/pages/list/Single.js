import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import "./single.scss";
import Chart from '../../components/charts/Chart';

import Datatable from '../../components/datatable/Datatable';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div  className='singleContainer'>
        <Navbar/>
        <div className='top'>
          <div  className='left'>
            <div  className='editButton'>
                     Edit
            </div>
            <h1  className='title'>
                 Information
            </h1>
            <div  className='item'>
                <img   src="https://www.shainblumphoto.com/wp-content/uploads/2015/11/sanfranfogwide1200.jpg" alt="" className='itemImg'/>
               <div  className='detalis'>
                <h1  className='itemTitle'> Jone Doe </h1>
                <div  className='detailItem'>
                  <span  className='itemKey'>  Email :</span>
                  <span  className='itemValue'> jonedgmail@gmail.com </span>
                </div>
                <div  className='detailItem'>
                  <span  className='itemKey'>  Phone :</span>
                  <span  className='itemValue'> + 1 231 56 789 </span>
                </div>
                <div  className='detailItem'>
                  <span  className='itemKey'>  Adress :</span>
                  <span  className='itemValue'> Etlon .243.elmon  </span>
                </div>
                <div  className='detailItem'>
                  <span  className='itemKey'>  country :</span>
                  <span  className='itemValue'> USA  </span>
                </div>

               </div>

            </div>


          </div>
          <div  className='right'>
            <Chart title="User Spending (Last 6 Months)"/>

         </div>
       </div> 
       <div className='bottom'>
        <h1 className='title' >
            Last Transiction 
        </h1>
        <Datatable/>
      </div> 

      </div>
       
    </div>
  )
}

export default Single
