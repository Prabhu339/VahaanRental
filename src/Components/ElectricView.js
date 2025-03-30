import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ElectricView = () => {
    const [ton,setTon]=useState([])
    const {_id}=useParams();
    useEffect(()=>{
        axios.get(`https://vahaan-rentals-deploy-1.onrender.com/bike/${_id}`)
        .then((res)=>setTon(res.data))
        .catch((err)=>console.log(err))
    })

  return (
   <>
   <div className='row'>
   <div className='container col-md-6 p-5'>
        <h1>Electric View</h1>
       <p>{ton.electricModel}</p>
       <img src={ton.electricImg}/>
    </div>
    <div className='col-md-6'>
        <h1>Electric Details</h1>
        <button>Buy now</button>
    </div>
   </div>
   </>
  )
}

export default ElectricView