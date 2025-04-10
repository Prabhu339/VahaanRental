import React from 'react'

import call from "./Assets/call.png"
import f from "./Assets/fb.png"
import mail from "./Assets/mail.jpg"
import i from "./Assets/insta2.jpg"
const Start = () => {

    const insta=()=>{
        window.open("https://www.instagram.com/")
      }
      const play=()=>{
        window.open("https://play.google.com/store/games?hl=en&pli=1")
      }
      const fb=()=>{
        window.open("https://www.facebook.com/")
      }
      
      
  return (
    <>
    <div className='row ap '>
        <div className='col-md-4 app'>
            <img src={f} className='' onClick={()=>fb()}/>
            <img src={i} className='insta' onClick={()=>insta()}/>
            
            <img src={call} className=''/>
          <b> +917337266170</b>
         
        
          
        </div>
        <div className='col-md-4 app'>
            <img src={mail}/>vahaanrentals12@gmail.com
        
          
        </div>
        <div className='col-md-4 '>
            <p className='sun'>Log In / <span>Sign In</span></p>
        </div>
    </div>
    </>
  )
}

export default Start