import React, { useEffect, useState } from 'react'
import ev from "./Assets/ev.webp"
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Electric = () => {
  const [cap,setcap]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:4000/bike`)
    .then((res)=>setcap(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='containern-fluid crus'>   
    
    <img src={ev}/>

    <div className='row'>
      {
        cap.map((data,bata)=>{
          return(
            <div key={bata} className='col-md-4 car '>
              <div className='card m-2'>
                <img src={data.electricImg}/>
               <div className='card-footer'>
             <b> Book Now</b> <NavLink to={`/electricview/${data._id}`}>
             <button className='w-50 ms-5 mt-2 btn btn-primary' >
             Rs {data.electricPrice}/day</button>
             </NavLink>
              <p className='btn w-100 bg-danger-subtle'>{data.electricBrand}-{data.electricModel}   Model</p>
               </div>
                
             
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default Electric