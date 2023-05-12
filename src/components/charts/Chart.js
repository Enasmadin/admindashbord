import React from 'react';
import "./chart.scss";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({title}) => {
  const data = [
    {
      name: "januoury",
      total:1200
    },
    {
      name: "fibrary",
      total:2100
    },
    {
      name: "march",
      total:800
    },
    {
      name: "April",
      total:1800
    },
    {
      name: "May",
      total:900
    },
    {
      name: "June",
      total:1700
    },
  
  
 

  ]
  return (
    <div className='chart'>
      <div className='title'> {title} </div>
   <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
   
  </defs>
  <XAxis dataKey="name" stroke='gray' />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className='cartesianGrid' />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
 
</AreaChart>
    </div>
  )
}

export default Chart
