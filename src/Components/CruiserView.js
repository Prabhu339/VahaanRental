import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CruiserView = () => {
    const {_id}=useParams()
    const [man,setman]=useState([])
    useEffect(()=>{
        axios.get(`https://vahaan-rentals-deploy-1.onrender.com/${_id}`)
        .then((res)=>setman(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='row'>
                    <div className='card shadow col-md-6  '>
                    <div className='card-body'>
                    <img src={man.cruiserImg} className='w-75'/>
                    </div>
                       <div className='card-footer bg-primary-subtle'>
                       <b>{man.cruiserModel}</b>
                  <b>{man.cruiserBrand}</b>
                       </div>
                 <button className='btn btn-primary'>Add To Cart</button>
            
                  </div>
  </div>
  )
}

export default CruiserView