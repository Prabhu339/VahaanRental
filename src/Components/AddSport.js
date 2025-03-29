import axios from 'axios'
import React, { useEffect, useState } from 'react'
import sport from "./Assets/dark.webp"
const AddSport = () => {
    const [sportImg,setSportImg]=useState("")
    const [sportModel,setSportModel]=useState("")
    const [ sportPrice,setSportprice]=useState("")
    const [sportBrand,setSportBrand]=useState("")
    const [sportDescription,setsportDescription]=useState("")

    const AddData=(e)=>{
        
            e.preventDefault();
          //  axios.post(`http://localhost:4000/bike`,{
          axios.post(`https://vahaan-rentals-deploy-1.onrender.com`,{
                sportBrand,sportDescription,sportImg,sportModel,sportPrice
            })
            .then((res)=>alert("Added"))
            .catch((err)=>alert(err))
        }
       
    

  return (
    <>
    <div className='row p-5'>

      <div className='col-md-6'>
        <img src={sport} className='w-100'/>
      </div>


      <div className='col-md-6'>
      <div>
      <button className='btn bg-danger-subtle'>
      Add your vehicles to the BikersAdda And Get Guaranteed Amount Monthly
      </button>
        <form onSubmit={AddData} className=' shadow'>
           
            <input type="text"
             value={sportImg}
             className='form-control w-75 m-3  text-center'
             placeholder='Image'
              onChange={(e)=>setSportImg(e.target.value)}/>

<input type="text"
             value={sportBrand}          className='form-control text-center w-75 m-3'
             placeholder=' SetBrand'
              onChange={(e)=>setSportBrand(e.target.value)}/>

             <input type="text"
             value={sportModel}
             className='form-control w-75  text-center m-3'
             placeholder='Model'
            
              onChange={(e)=>setSportModel(e.target.value)}/>

<input type="text"
             value={sportPrice}
             className='form-control w-75 m-3  text-center '
             placeholder='Price'
              onChange={(e)=>setSportprice(e.target.value)}/>

<input type="text"
             value={sportBrand}
             className='form-control w-75 m-3 text-center'
             placeholder='description'
              onChange={(e)=>setsportDescription(e.target.value)}/>
 
 {/*<input type='submit ' value='Add sports' className='btn btn-primary w-75 m-3 text-center'/>*/}

 <input type='submit' value='AddVehicle' className='bg-success text-light btn m-3 w-75'/>
        </form>
    </div>
      </div>
    </div>
    </>
  )
}

export default AddSport;