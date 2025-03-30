import axios from 'axios'
import React, { useEffect, useState } from 'react'
import re from "./Assets/re.avif"
const AddCruiser = () => {
    const [cruiserImg,setcruiserImg]=useState("")
    const [cruiserModel,setcruiserModel]=useState("")
    const [cruiserPrice,setcruiserPrice]=useState("")
    const [cruiserBrand,setcruiserBrand]=useState("")
    const [cruiserDescription,setcruiserDescription]=useState("")
 
    const AddData=(e)=>{
        
            e.preventDefault();
            //axios.post(`http://localhost:4000/bike`,{
            axios.post(`https://vahaan-rentals-deploy-1.onrender.com/bike `,{
               cruiserBrand,cruiserDescription,cruiserImg,cruiserModel,cruiserPrice
            })
            .then((res)=>alert("Added"))
            .catch((err)=>alert(err))
        }
       
    

  return (
  <>
  <div className='row p-3'>


<div className='col-md-6'>
  <img src={re} className='w-75'/>
</div>


<div className='col-md-6'>

<div>
   <button className='btn bg-success-subtle'>
     <b>Add your vehicles to the BikersAdda And Get Guaranteed Amount Monthly</b>
     </button>
    <form onSubmit={AddData} className=' shadow center'>
       
        <input type="text"
         value={cruiserImg}
         className='form-control w-75 m-3  text-center'
         placeholder='Image'
          onChange={(e)=>setcruiserImg(e.target.value)}/>

<input type="text"
         value={cruiserBrand}          className='form-control text-center w-75 m-3'
         placeholder=' SetBrand'
          onChange={(e)=>setcruiserBrand(e.target.value)}/>

         <input type="text"
         value={cruiserModel}
         className='form-control w-75  text-center m-3'
         placeholder='Model'
        
          onChange={(e)=>setcruiserModel(e.target.value)}/>

<input type="text"
         value={cruiserPrice}
         className='form-control w-75 m-3  text-center '
         placeholder='Price'
          onChange={(e)=>setcruiserPrice(e.target.value)}/>

<input type="text"
         value={cruiserDescription}
         className='form-control w-75 m-3 text-center'
         placeholder='description'
          onChange={(e)=>setcruiserDescription(e.target.value)}/>

<input type='submit' value='AddVehicle' className='bg-success text-light btn m-3 w-75'/>

    </form>
</div>

</div>
</div>
  </>
  )
}

export default AddCruiser;