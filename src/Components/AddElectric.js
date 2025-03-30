import axios from 'axios'
import React, { useEffect, useState } from 'react'
import charge from "./Assets/charge.jpg"
const AddElectric = () => {
    const [electricImg,setElectricImg]=useState("")
    const [electricModel,setElectricModel]=useState("")
    const [electricPrice,setElectricPrice]=useState("")
    const [electricBrand,setElectricBrand]=useState("")
    const [electricDescription,setElectricDescription]=useState("")

    const Add=(e)=>{
        
            e.preventDefault();
           // axios.post(`http://localhost:4000/bike`,{
           axios.post(`https://vahaan-rentals-deploy-1.onrender.com/bike `,{
               electricBrand,electricDescription,electricImg,electricModel,electricPrice
            })
            .then((res)=>alert("Added"))
            .catch((err)=>alert(err))
        }
       
    

  return (
   <>
   <div className='row p-3'>


    <div className='col-md-6'>
      <img src={charge} className='w-75'/>
    </div>


    <div className='col-md-6'>

    <div>
     <button className='btn bg-success-subtle'>
     <b>Add your vehicles to the BikersAdda And Get Guaranteed Amount Monthly</b>
     </button>
        <form onSubmit={Add} className=' shadow center'>
           
            <input type="text"
             value={electricImg}
             className='form-control w-75 m-3  text-center'
             placeholder='Image'
              onChange={(e)=>setElectricImg(e.target.value)}/>

<input type="text"
             value={electricBrand}         
              className='form-control text-center w-75 m-3'
             placeholder=' SetBrand'
              onChange={(e)=>setElectricBrand(e.target.value)}/>

             <input type="text"
             value={electricModel}
             className='form-control w-75  text-center m-3'
             placeholder='Model'
            
              onChange={(e)=>setElectricModel(e.target.value)}/>

<input type="text"
             value={electricPrice}
             className='form-control w-75 m-3  text-center '
             placeholder='Price'
              onChange={(e)=>setElectricPrice(e.target.value)}/>

<input type="text"
             value={electricDescription}
             className='form-control w-75 m-3 text-center'
             placeholder='description'
              onChange={(e)=>setElectricDescription(e.target.value)}/>
 
 <input type='submit' value='AddVehicle' className='bg-success text-light btn m-3 w-75'/>


        </form>
    </div>

    </div>
   </div>
   </>
  )
}

export default AddElectric;