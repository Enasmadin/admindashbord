import React from 'react';
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Wediget from '../../components/weidgets/Wediget';
import Feature from '../../components/feauture/Feature';
import Chart from '../../components/charts/Chart';
import Tables from '../../components/table/Tables';


const Home = () => {
  return (
    <div className='home'>
       <Sidebar/>
       <div className='homecontainer'>
         <Navbar/>
         <div className='wedigets'>
            <Wediget type="users"/>
            <Wediget type="order"/>
            <Wediget type="earning"/>
            <Wediget type="balance"/>
        </div> 
        <div  className='charts'>
              <Feature/>
              <Chart title="Last 6 Months (Revenue)"/>
        </div>
        <div  className='listContainer'>
            <div  className='listTitle'>

              Last Transitions
            </div>
           <Tables/>

        </div>

       </div>
    </div>
  )
}

export default Home
