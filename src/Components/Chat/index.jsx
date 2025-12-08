import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { CiSearch } from 'react-icons/ci'
import axios from 'axios'

const Chat = () => {
  const {user}=useContext(AppContext)
  const [alluser,setAllUser]=useState([])
  const [search,setSearch]=useState(null)
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

  const filtersearch=filter.allusers()


      

  return (
<>
<section className=' '>
    <div className='h-300 '>
    <h1 className='font-semibold text-2xl'>Chat</h1>
    <div className='grid grid-cols-2'>

    <div className='bg-white border-gray rounded-2xl w-[50%]   p-2  m-5 '>
     <h1 className='font-semibold text-xl'>Chat</h1>
     <div className='flex text-center  relative w-[10%] m-1'>
<span className='absolute mt-3'>
  
 <CiSearch /> 
</span>
         <input type="name" placeholder='Search' className=' border pl-5  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg'/>
     </div>
     <div className='' >
  {alluser?.map((user) => (
    <div 
      key={user._id} 
      className='flex items-center gap-5 p-2 hover:bg-gray-50 rounded-lg cursor-pointer overflow-y-auto'
    >
      <img 
        src={user.imageUrl} 
        alt={user.firstname}
        className='w-12 h-12 rounded-full object-cover'
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
</div>

    </div>
      {/* <div className='bg-white border-gray rounded-lg w-[75%] h-full'>
       <h1>{user.firstname}</h1>
    </div> */}
    </div>
    </div>
</section>
</>
  )
}

export default Chat