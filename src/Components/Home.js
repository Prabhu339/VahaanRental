import React, { useState } from 'react'
import bike from "./Assets/electric.jpg"
import bike2 from "./Assets/bike3.jpg"
import bike4 from "./Assets/bike4.jpg"
import bike5 from "./Assets/scooty.jpg"
import tick from "./Assets/tick.png"
import sp from "./Assets/sport.jpg"
import logo from "./Assets/speed-fire-bike-logo-2BKG67G.jpg"
import { useNavigate } from 'react-router-dom'
import ViewBike from './ViewBike'
import axios from 'axios'
const Home = () => {
    const WhatsApp=()=>{
        window.open("https://web.whatsapp.com/")
    }
    const handleCall = () => {
        const phoneNumber = "7337266170";
        window.open(`tel:${phoneNumber}`);
      };
    const [number,setNumber]=useState("")

    const [variant,setVariant]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [comment,setComment]=useState("")
    const navigate=useNavigate();
    const send=()=>{
       
       /* axios.post(`http://localhost:4000/quiry`,{
            number
        })*/
            axios.post(`https://vahaan-rentals-deploy-1.onrender.com/quiry`,{
                number})
        .then((res)=>{
            alert("ull get a callback")
        })
        .catch((err)=>console.log(err))
    }
  return (
    <>
    <div className='container-fluid row home'>
        <marquee><h3 className='text-danger'></h3></marquee>
     <div className='col-md-8'></div>
     <div className='col-md-4'>
     <h3>Trusted And Efficient </h3> 
       <p> Two Wheelers On Rental Services</p>
       
        <button className='btn btn-danger'
        data-bs-toggle="modal"
        data-bs-target="#enquiry"
        >Enquire Now!</button>
     </div>
    </div>

    <div className='container p-5 cat'>
        <h2>Rent By Categories</h2>
        <div className='row text-center pic'>
            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3'>
                <img src={bike} alt="Bike" className='img-fluid mt-5  mb-4 ' />
                <b>electric scooters</b><br></br>
                <button className='btn btn-danger m-3'
                 onClick={()=>navigate('/electric')}
                > Know More</button>

            </div>

            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3'>
                <img src={bike2} alt="Bike" className='img-fluid mt-5' />
                <b >Sports Bike</b><br></br>
                <button className='btn btn-danger m-3'
                 onClick={()=>navigate('/sports')}
                >Know More</button>
            </div>

            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3'>
                <img src={bike4} alt="Bike" className='img-fluid' />
                <b>Cruisers</b><br></br>
                <button className='btn btn-danger m-3'
                 onClick={()=>navigate('/cruciers')}
               
                >Know More</button>
            </div>

            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3'>
                <img src={bike5} alt="Bike" className='img-fluid' />
                <b> scooters</b><br></br>
                <button className='btn btn-danger mb-3' 
                onClick={()=>navigate('/scooter')}
                >Know More</button>
            </div>
          
        </div>
    </div>


    <div className='shot row '>
  <div className='col-6'></div>
  <div className='col-6 p-3 '>
<h3 className='ms-5'>Book A Bike Near You</h3>
<div className='card w-50 demo ms-5'>
    <div className='card-body d-flex demo'>
    <img src={logo} className='w-25 me-3 '/>
  <b>  <h5>Choose A Bike </h5></b>

    </div>
    <p className='ms-2'>Book a Bike from range of varities</p>
</div>

<div className='card w-50 demo mt-4 ms-5 '>
    <div className='card-body d-flex demo'>
    <img src={tick}
    
    className='w-25 me-3 tk'/>
  <b>  <h5>Book And Pay </h5></b>

    </div>
    <p className='ms-2'>Book a car and pay online</p>
</div>


  </div>
 
     
    </div>


<div className='call p-5 container m-5 text-center'>
    <h3>Can't find the perfect Bike?</h3>
    <p>Let us help you on a quick call</p>
   
  
   <form onSubmit={send}>
   <input type='text' placeholder='Enter Mobile Number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
   <input type='submit' value='Get CallBack'  className='bg-success'/>
   </form>
   
   
</div>

<div className=' row choose '>
    <div className=' col-md-6 call  p-3 text-center'>
        <h2>Why Choose Us?  </h2>
        <div className='d-flex text-center'>
       <h5 className='card w-50 m-2 '> 
       <img src={logo} className='w-25 me-3 '/>
        24/7 Breakdown Service</h5>
       <div className='card w-50 m-2 ' >
       <img src={tick} className='w-25 me-3'/>
       <b> Unlimited Kilometers</b></div>
        </div>
        <div className='d-flex text-center'>
       <h5 className='card w-50 m-2'>
       <img src={logo} className='w-25 me-3 '/>
        Choose Your Own Hours</h5>
       <h5 className='card w-50 m-2 p-3 ' >
       <img src={logo} className='w-25 me-3 '/>
        Check Original Bike Photo</h5>
        </div>
    </div>
    <div className='col-md-6 '>
        <img src={sp} className='w-100'/>
    </div>
</div>
<ViewBike/> 

<div className='call row m-5 text-center'>
    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5'>
    <h3>Get in touch with us to arrange your booking</h3>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5'>
        <h5>contact us  Now</h5>
        <button  className='btn btn-success me-3' onClick={WhatsApp}>WhatsApp</button>
        <button className='btn btn-primary' onClick={handleCall}>Call Us</button>
    </div>
</div>

<div className='modal  fade' id='enquiry'>
    <div className='modal-dialog'>
        <div className='modal-content'>
            <div className='modal-body'>
            <div className='row mode'>
                          <div className='col-md-4'>
                            <img src={bike5}
                            className='w-100'/>
                          </div>
                          <div className='col-md-8'>
                            <h2>Hello There</h2>
                            <p>How can we Help you my Friend?
                            </p>
                           <form>
                           <div className='form'>
                           <p>Select Your variant *
                            </p>
                            
           
                            Ev Bike<input type='radio'name='pet'className='w-25'
                             value={variant}
                             onChange={(e)=>setVariant(e.target.value)}/>
                            Fuel Bike<input type='radio' name='pet' className='w-25'
                            value={variant}
                            onChange={(e)=>setVariant(e.target.value)}/>

                          


                    <input type='text' placeholder='name' className='w-50 mb-3 '
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                    
                    <input type='text' placeholder='phone number' className='w-50  mb-3'
                     value={phone}
                     onChange={(e)=>setPhone(e.target.value)}/>
                    
                    <input type='text' placeholder='email address ' className='w-50 mb-3'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>

                   
                    <input type='text' placeholder='comments ' className='w-100 mb-3'
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)}/>
 
                            <input type='submit' value='Book Now' className='bg-dark text-white'/>
                                   </div>
                           </form>
                          </div>
                        </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Home