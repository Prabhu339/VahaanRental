import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sport = () => {
  const [top,setTop]=useState([])
  useEffect(()=>{
    axios.get(`https://vahaan-rentals-deploy-1.onrender.com/bike`)
    .then((res)=>setTop(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <>
    <div className='crus'>
      <img src='https://img.freepik.com/free-photo/full-shot-adult-with-equipment-riding-motorcycle_23-2150781542.jpg?ga=GA1.1.1539206806.1717778675&semt=ais_hybrid'/>
    </div>

    <div className='row'>
      {
        top.map((data,index)=>{
          return(
            <div key={index} className='col-md-4 car '>
              <div className='card m-2'>
                <img src={data.sportsImg}/>
               <div className='card-footer'>
             <b> Book Now</b> <NavLink to={`/sportview/${data._id}`}>
             <button className='w-50 ms-5 mt-2 btn btn-primary' >
             Rs {data.sportsPrice}/day</button>
             </NavLink>
              <p className='btn w-100 bg-danger-subtle'>{data.sportsBrand}-{data.sportsModel}   Model</p>
               </div>
                
             
              </div>
            </div>
          )
        })
      }

    </div>
    </>
  )
}

export default Sport