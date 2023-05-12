import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import"./table.scss";

const products =[
  {
    "id":1,
    "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "customer":"enas madina",
    "date":" 1 March",
    " paymentmethod":"Cash ",
    "Amount":234,
    "status":"approved",



  },
  {
    "id":2,
    "image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "customer":"amira madina",
    " paymentmethod":"visa ",
    "Amount":1000,
    "status":"pendding",
    "date":" 2 March",
  },
  {
    "id":3,
    "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "customer":"mohamed madina",
    " paymentmethod":"paypal ",
    "Amount":400,
    "status":"approved",
    "date":" 3 March",
  },
  {
    "id":4,
    "image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "customer":"eman madina",
    " paymentmethod":"cash ",
    "Amount":4001,
    "status":"approved",
    "date":" 4 March",
  }
]
const Tables = () => {
  return (
    <TableContainer component={Paper}  class="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
         
          <TableCell className='tablecell' >  Tracking Id </TableCell>
          <TableCell  className='tablecell'> Customer </TableCell>
          <TableCell  className='tablecell'> Date </TableCell>
          <TableCell className='tablecell'> Amount</TableCell>
          <TableCell  className='tablecell'> Payment Method </TableCell>
          <TableCell className='tablecell'> Status </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow
            key={product.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" className='cellWaper' >
              <img  src={product.image}  alt=""/>
              
            </TableCell>
            <TableCell   className='tablecell' >{product.customer}</TableCell>
          
            <TableCell  className='tablecell'>{product.date}</TableCell>
            <TableCell  className='tablecell'>{product.Amount}</TableCell>
            <TableCell  className='tablecell'>{product.paymentmethod}</TableCell>
            <TableCell className='tablecell'> <span className={`status ${product.status}`}> {product.status} </span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tables
