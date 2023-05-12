 export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
  
    { field: 'user', headerName: 'User', width: 230,renderCell:(parms)=>{
        return(
            <div className="cellWithImag">
                <img  className="cellImag"  src={parms.row.img} alt=" avater"/>
                {parms.row.username}
            </div>
        )
    }
    },
       

    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    
    {
        field: 'age',
        headerName: 'Age',
        width: 120,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell:(params)=>{
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }
    },
 
        
 
  ];


export const  userRows =[
    {
        id:1,
        username:"radi",
        status:"active",
        age:18,
        email:"radiamadina@gmail.com",
        img:"https://th.bing.com/th/id/R.6af6fd9c37f0de4abb34ea0fd20acce3?rik=55mqMmrTutVR0Q&pid=ImgRaw&r=0"
    },
    {
        id:2,
        username:"yosef",
        status:"passive",
        age:78,
        img:"https://www.bing.com/images/search?view=detailV2&ccid=ZmE5D8pr&id=CAF9DF992F050B7A3D9CB1F8DCE4E7FF9B1386A6&thid=OIP.ZmE5D8prTUQ2EBqaUB7t5AHaL0&mediaurl=https%3a%2f%2fpngimg.com%2fuploads%2fbusinessman%2fbusinessman_PNG6566.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6661390fca6b4d4436101a9a501eede4%3frik%3dpoYTm%252f%252fn5Nz4sQ%26pid%3dImgRaw%26r%3d0&exph=1173&expw=735&q=image+of+person&simid=607990910898030389&FORM=IRPRST&ck=3648E8E5B00AD983CB76020CDA225E0A&selectedIndex=3",
        email:"yousef@gmail.com",

    },
    {
        id:3,
        username:"ahmad",
        status:"pending",
        age:78,
        img:"https://th.bing.com/th/id/R.ea5c6ddcd0cf17b958d945ec8beb61a0?rik=sxAQw%2bpwMk8DWA&pid=ImgRaw&r=0",
        email:"ahmad@gmail.com",

    }
    
    
]