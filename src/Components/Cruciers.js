import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Cruciers = () => {
  const [can,setcan]=useState([])
  useEffect(()=>{
    axios.get(`https://vahaan-rentals-deploy-1.onrender.com/bike`)
    .then((res)=>setcan(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div>   
    
    <div className='crus'>
    <img src='https://img.freepik.com/premium-photo/
    kyiv-ukraine-september-13-2014-harley-davidson-deluxe-motorcycle-with-
    metallized-part-details_474717-189060.jpg?ga=GA1.1.1539206806.1717778675&semt=ais_hybrid'/>

    </div>
    <div className='row container p-5'>
      {
        can.map((show,bata)=>{
          return(
            <div key={bata} className='col-md-4 car '>
              <div className='card m-2'>
                <img src={show.cruiserImg}/>
               <div className='card-footer'>
             <b> Book Now</b> <NavLink to={`/cruiserview/${show._id}`}>
             <p className='w-50 ms-5 mt-2 btn btn-primary' >
             Rs {show.cruiserPrice}/day</p>
             </NavLink>
              <p className='btn w-100 bg-danger-subtle'>{show.cruiserBrand}-{show.cruiserModel}   Model</p>
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

export default Cruciers