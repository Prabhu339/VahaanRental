import React, { useEffect, useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Blog = () => {
  const [ball,setball]=useState([])
  useEffect(()=>{
    axios.get(`https://vahaan-rentals-deploy-1.onrender.com/blogs`)
    .then((res)=>setball(res.data))
    .catch((err)=>console.log(err))
  })
  const navigate=useNavigate();
  const ap=()=>{
    navigate('/')
  }
  return (
    <div className='row container p-5'>
      app
      
    {
      ball.map((data,index)=>{
        return(
         <div className='col-md-4 bl'>
           <div key={index} className='p-2 card blg'>
           <img src={data.cruiserImg}/>
                <p>{data.cruiserDescription}</p>
                <p>{data.cruiserBrand}</p>
                <p>{data.cruiserPrice}</p>
                <p>{data.cruiserModel}</p>
            
            <NavLink to={`/chinni/${data._id}`}>
            <button className='btn btn-danger'>Konw more</button>
            </NavLink>
          </div>

          <div key={index} className='p-2 card'>
           <img src={data.electricImg}/>
                <p>{data.electricDescription}</p>
                <p>{data.electricBrand}</p>
                <p>{data.electricPrice}</p>
                <p>{data.electricModel}</p>
            
            <NavLink to={`/chinni/${data._id}`}>
            <button className='btn btn-danger'>Konw more</button>
            </NavLink>
          </div>
         </div>
        )
      })
    }
    
    </div>
  )
}

export default Blog