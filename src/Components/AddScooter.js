import axios from 'axios'
import React, { useEffect, useState } from 'react'
import scooty from "./Assets/addscooty.jpg"
const AddScooter = () => {
    const [scooterImg,setScooterImg]=useState("")
    const [scooterModel,setScooterModel]=useState("")
    const [scooterPrice,setScooterPrice]=useState("")
    const [scooterBrand,setScooterBrand]=useState("")
    const [scooterDescription,setScooterDescription]=useState("")

    const AddData=(e)=>{
        
            e.preventDefault();
           // axios.post(`http://localhost:4000/bike`,{
           axios.post(`https://vahaan-rentals-deploy-1.onrender.com `,{
               scooterDescription,scooterBrand,scooterImg,scooterModel,scooterPrice
            })
            .then((res)=>alert("Added"))
            .catch((err)=>alert(err))
        }
       
    

  return (
   <>
   <div className='row p-5'>
    <div className='col-md-6'>
      <img src={scooty} className='w-100'/>
    </div>

    <div className='col-md-6'>

    <div>
      <button className='btn bg-primary-subtle'>
      Add your vehicles to the BikersAdda And Get Guaranteed Amount Monthly
      </button>
        <form onSubmit={AddData} className=' shadow'>
           
            <input type="text"
             value={scooterImg}
             className='form-control w-75 m-3  text-center'
             placeholder='Image'
              onChange={(e)=>setScooterImg(e.target.value)}/>

<input type="text"
             value={scooterBrand}          className='form-control text-center w-75 m-3'
             placeholder=' SetBrand'
              onChange={(e)=>setScooterBrand(e.target.value)}/>

             <input type="text"
             value={scooterModel}
             className='form-control w-75  text-center m-3'
             placeholder='Model'
            
              onChange={(e)=>setScooterModel(e.target.value)}/>

<input type="text"
             value={scooterPrice}
             className='form-control w-75 m-3  text-center '
             placeholder='Price'
              onChange={(e)=>setScooterPrice(e.target.value)}/>

<input type="text"
             value={scooterDescription}
             className='form-control w-75 m-3 text-center'
             placeholder='description'
              onChange={(e)=>setScooterDescription(e.target.value)}/>
 
 <input type='submit' value='Add Scooter' className='btn btn-primary w-75 m-3 text-center'/>


        </form>
    </div>

    </div>
    </div>
    
    </>
  )
}

export default AddScooter;