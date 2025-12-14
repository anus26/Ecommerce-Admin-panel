import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { CiSearch } from 'react-icons/ci'
import { BiRightArrow } from "react-icons/bi";
import axios from 'axios'

const Chat = () => {
  const {user}=useContext(AppContext)
  const [alluser,setAllUser]=useState([])
  const [search,setSearch]=useState("")
  const [activeuser,setActiveUser]=useState(null)
  const [sendmessage,setSendMessage]=useState("")
  const {socket ,onlineusers}=useContext(AppContext)
  const [form, setForm]=useState({
    message:""
})
  console.log(onlineusers);
  console.log(socket);
  
  const handle=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const userAll=async()=>{

    
    const res=await axios.get('http://localhost:5000/api/v1/user/alluser',{
      withCredentials:true
    })
    console.log("All users",res.data);
    setAllUser(res.data)
  }
  useEffect(()=>{
    userAll()
  },[])

    const filtersearch = alluser.filter((u) =>
    `${u.firstname} ${u.lastname}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const message=async(e)=>{
e.preventDefault()
    try {
      const res=await axios.post(`http://localhost:5000/api/v1/send/${user._id}`,form,{
        withCredentials:true
      })
      console.log(res.data);
      setSendMessage(res.data)
      setSendMessage("")
      
    } catch (error) {
      console.log(error);
      
    }
  }

  
  

  return (
<>
<section className='h-dvh'>
   
    <h1 className='font-semibold text-2xl'>Chat</h1>
    <div className='flex  h-dvh '>

    <div className='bg-white border-gray rounded-2xl w-[25%]   p-2  m-5 '>
     <h1 className='font-semibold text-xl'>Chat</h1>
     <div className='flex text-center  relative w-[10%] m-4 '>
<span className=' mt-3'>
  
 <CiSearch className='absolute -translate-y-1/5  ' /> 
</span>
         <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search}  placeholder='Search' className=' border pl-5  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg'/>
     </div>
     <div className='overflow-y-auto' >
  {filtersearch?.map((user) => (
    <div 
    key={user._id} 
    className={`flex items-center gap-5 p-2 hover:bg-gray-50 rounded-lg cursor-pointer ${activeuser?._id ===user._id? 'text-primary' : 'text-textt group-hover:text-primary'}`}
    onClick={()=>setActiveUser(user)}
    >
<img
  src={user.imageUrl}
  alt={user.firstname}
  className={`w-12 h-12 rounded-full object-cover ${
    Array.isArray(onlineusers) && onlineusers.includes(user._id)
      ? "ring-2 ring-green"
      : ""
  }`}
/>




      <div className='flex flex-col'>
        <span className='font-medium'>
          {user.firstname} {user.lastname}
        </span>
        <span className='text-sm text-textt'>
          {user.position}
        </span>
      </div>
    </div>
  ))}
  {filtersearch.length === 0 && (
  <p className="text-gray-400 text-sm text-center mt-3">
    No users found
  </p>
)}

  </div>



    </div>
      <div className='bg-white border-gray rounded-xl w-[75%]  m-5 relative'>
        <div className='border-b border-gray'>

       {activeuser ?(
         <>
<div className='flex gap-3 text-center items-center m-5  '>
    <img 
        src={activeuser.imageUrl} 
        alt={activeuser.firstname}
        className='w-12 h-12 rounded-full object-cover'
        />
      <div className='flex flex-col'>
        <span className='font-medium'>
          {activeuser.firstname} {activeuser.lastname}
        </span>
        <span className='text-sm text-textt'>
          {activeuser.position}
        </span>
      </div>
      </div>
    </>
       ):(
         <div>

        </div>
       )
      }
      </div>
   

<form onSubmit={message}>

        <div   className='absolute flex inset-x-0  bottom-0 text-center items-center m-5 border-t border-gray '>


        <input type="text" placeholder='Type here' name='message' value={form.message}  onChange={handle}   className=' flex  h-10 inset-x-0 w-[80%]  bottom-0 overflow-hidden outline-none' />
        <button type='submit'><BiRightArrow className='text-xl' /></button>
       

      </div>
</form>
    </div>
    </div>
   
</section>
</>
  )
}

export default Chat