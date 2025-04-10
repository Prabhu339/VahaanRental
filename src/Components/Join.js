import React from 'react'
import rent from "./Assets/rent.webp"
import charge from "./Assets/charge1.jpg"
import join1 from "./Assets/join1.avif"
import join from "./Assets/join.avif"
import { useNavigate } from 'react-router-dom'
const Join = () => {
  const navigate=useNavigate()
  return (
   <div className='container'>
    <div>
       <marquee className='bg-info-subtle'> <h1>Join With Us</h1></marquee>
    </div>
  
       <div className='road'>
       <h2 className='text-center'>Attach your Vehicle</h2>
        <button className='btn btn-danger w-100 '>select vehicle type</button>
        <button className='btn btn-success m-1 me-5 bold' onClick={()=>navigate('/addelectric')}> Electric</button>
        <button className='btn btn-secondary m-1 me-5'  onClick={()=>navigate('/addcruiser')}>Cruisers</button>
        <button className='btn btn-danger m-1 me-5'  onClick={()=>navigate('/addsport')}>Sports</button>
        <button className='btn btn-primary m-1'  onClick={()=>navigate('/addscooter')}>Scooters</button>
        <div className='dark'>
       { /*<img src={dark}  className='heart'/>*/}
      
      </div>
      
        </div>
        <marquee className=''>  
        <img src={join1}  className='w-25'/>
         </marquee>
  
        </div>
 
  
  )
}

export default Join