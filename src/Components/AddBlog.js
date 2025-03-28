import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState("")
    const AddData=(e)=>{
        
            e.preventDefault();
            axios.post(`http://localhost:4000/blogs`,{
                title,content,image,type,description
            })
            .then((res)=>alert("Added"))
            .catch((err)=>alert(err))
        }
       
    

  return (
    <div>
        <form onSubmit={AddData} className=' shadow'>
           
            <input type="text"
             value={title}
             className='form-control w-75 m-3'
             placeholder='title'
              onChange={(e)=>setTitle(e.target.value)}/>

<input type="text"
             value={price}
             className='form-control w-75 m-3'
             placeholder=' Set Price'
              onChange={(e)=>setPrice(e.target.value)}/>

             <input type="text"
             value={content}
             className='form-control w-75 m-3'
             placeholder='Content'
            
              onChange={(e)=>setContent(e.target.value)}/>

<input type="text"
             value={description}
             className='form-control w-75 m-3'
             placeholder='description'
              onChange={(e)=>setDescription(e.target.value)}/>

<input type="text"
             value={type}
             className='form-control w-75 m-3'
             placeholder='Type'
              onChange={(e)=>setType(e.target.value)}/>

<input type="text"
             value={image}
             className='form-control w-75 m-3'
             placeholder='Image'
              onChange={(e)=>setImage(e.target.value)}/>

              <input type='submit' value='AddVehicle' className='bg-success text-light btn m-3 w-75'/>

        </form>
    </div>
  )
}

export default AddBlog