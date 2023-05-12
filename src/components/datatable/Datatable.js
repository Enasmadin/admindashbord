import React, { useState } from 'react';
import {  DataGrid } from '@mui/x-data-grid';
import "./datatable.scss"
import {userColumns,userRows} from "./database"
import { Link } from 'react-router-dom';

const Datatable = () => {
  const [data,setdata]=useState(userRows);
  const handelDelte=(id)=>{
    setdata(data.filter((item)=>item.id !== id))

  }
    const actionColumn = [ {
        field: 'actionButton',
        headerName: 'Actions',
        width: 200,
       renderCell:(parms)=>{
            return(
          
                    <div className="cellActions"  >
                      <Link  to="/users/test" style={{ textDecoration:"none" }}>
                     
                      <div  className='viewButton'> View </div>
                      </Link>
                      <div  className='delteButton' onClick={()=>{handelDelte(parms.row.id)}}> Delete </div>
                    </div>
               
            )
       }
        


      },]
  return (
    <div className='datatable'>
      <div  className='datatabletitle'>
        Add New User 
        <Link to="/users/new" className='link'>
          Add New
        </Link>

      </div>
        <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
