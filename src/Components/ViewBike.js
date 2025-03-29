import axios from 'axios';
import React, { useEffect, useState } from 'react'

import left from "./Assets/left1.png"
import right from "./Assets/right1.png"

const ViewBike = () => {
    const [show,setShow]=useState([]);
    const [scrollPosition,setScrollPosition]=useState(0);
    useEffect(()=>{
        axios.get(`https://vahaan-rentals-deploy-1.onrender.com`)
        .then((res)=>setShow(res.data))
        .catch((err)=>console.log(err))
    })

    const handleScroll=((dir)=>{
      const gallery=document.getElementById("chainGallery")
      const scrollAmount=500;
      if(dir==="left"){
          gallery.scrollTo({
              left:gallery.scrollLeft-scrollAmount,
              behavior:"smooth"

          })

      }else if(dir==="right"){
          gallery.scrollTo({
              left:gallery.scrollLeft+scrollAmount,
              behavior:"smooth"
          })
      }
     
  })
    
    
  return (
   


   <div>

<div className='inline p-5'>
       <h4 className='bold '>Discover best bikes in your Area</h4>
       <div className='inbtn'>
       <button onClick={()=>handleScroll("left")} className='btn btn '><img src={left} className='but '/></button>
       <button onClick={()=>handleScroll("right")} className='btn btn me-auto'><img src={right} className='but '/></button>
       </div>
      
      </div>

     <div className='container p-1 display 'id='chainGallery' onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
     

     

      {
        show.map((data,ind)=>{
          
          return(
          
             <div key={ind}  className='col-md-3  card blg moon'>
              
              
                 <img src={data.cruiserImg}   alt="..."  />
                 <p>{data.scooterModel}</p>
                     
                             
              
                 </div>
          
            
          )
        
        })
      }
      
    </div>
   </div>
  )
}

export default ViewBike