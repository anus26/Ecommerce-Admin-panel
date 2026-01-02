import React, {  useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { CiSearch } from 'react-icons/ci'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import axios from 'axios'
import {  PiChatCircleDots } from "react-icons/pi";
import {  Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
const Chat = () => {
  const [alluser,setAllUser]=useState([])
  const [search,setSearch]=useState("")
  const [activeuser,setActiveUser]=useState(null)
  const [sendmessage,setSendMessage]=useState("")
  const [getmessages,setGetMessages]=useState([])
  const [backe,setBacke]=useState(true)
  const {socket ,onlineusers,messageSound,user}=useContext(AppContext)
  const [form, setForm]=useState({
    message:""
  })
  console.log(onlineusers);
  console.log(socket);

const handleActiveuser = (selectedUser) => {
  setActiveUser(selectedUser)
  getmessage(selectedUser._id)
  setBacke(false)
}

  const handle=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const userAll=async()=>{

    
    const res=await axios.get('https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/user/alluser',{

      withCredentials:true,

    })
    
    console.log("All users",res.data);
    setAllUser(res.data)
  }
  useEffect(()=>{
    userAll()

  },[])

  useEffect(()=>{
    if (!socket) return
    socket.on("newMessage",(msg)=>{
      setGetMessages(prev=>[...prev,msg])
      messageSound.play()
    })
    
  return () => socket.off("newMessage")
  },[socket])

  const  getmessage=async(receiverId)=>{
    try {
      const res=await axios.get(`https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/getmessage/${receiverId}`,{
        withCredentials:true
      })
      console.log("All User message",res.data.messages);
      setGetMessages(res.data.messages)


    } catch (error) {
      console.log(error);
      
    }
  }

    const filtersearch = alluser.filter((u) =>
    `${u.firstname} ${u.lastname}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const message=async(e)=>{
e.preventDefault()
    try {
      const res=await axios.post(`https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/send/${activeuser._id}`,form,{
        withCredentials:true
      })
      setGetMessages(prev => [...prev, res.data])
      console.log(res.data);
      setSendMessage(res.data)
    socket.emit("sendMessage", {
      receiverId: activeuser._id,
      msg: res.data
    })
    setForm({message:""})

    messageSound.play()      
      console.log(socket.connected)

      
    } catch (error) {
      console.log(error);
      
    }
  }

const formattime = (date) => {
  if (!date) return "";

  const d = new Date(date);
  const now = new Date();

  const isToday =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();

  if (isToday) {
    return `Last seen at ${d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }

  return `Last seen ${d.toLocaleDateString([], {
    day: "numeric",
    month: "short",
  })} at ${d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};

const handleBackToUsers = () => {
  setBacke(true)        // users list show
  setActiveUser(null)   // chat close
}
Array.isArray(onlineusers) && onlineusers.includes(user._id)


  return (
<>
<section className=''>
   
   <div className='flex  justify-between m-4'>

    <h1 className='font-semibold text-2xl'>Chat</h1>
    <div className='flex  text-center items-center  gap-2'>
      <Link to='/' className='text-textt'>Home</Link>
      <span><FaAngleRight /></span>
      <Link>Chat</Link>

    </div>
   </div>
    <div className=' flex justify-center  '>

  


      <div className={`chat bg-white border-gray rounded-2xl w-full md:w-[35%]  xl:w-[25%]    p-2  m-5
         ${backe ? "block" : "hidden"} md:block `  }>
              <h1 className='font-semibold text-2xl'>Chats</h1>
              <div className='flex text-center  relative  w-[90%] m-4 '>


                  <CiSearch className='absolute -translate-y-1/5   text-xl  top-3 ' />
        
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search'
                  className=' border pl-5  hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,150,0.4)] transition-all duration-300 outline-none p-2 border-gray rounded-lg' />
              </div>
              <div className='overflow-y-auto'>
                {filtersearch?.map((user) => (
                  <div
                    key={user._id}
                    className={`flex items-center gap-5 p-2 hover:bg-gray-50 rounded-lg cursor-pointer ${activeuser?._id === user._id ? 'text-primary' : 'text-textt group-hover:text-primary'}`}
                    onClick={() => handleActiveuser(user)}
                  >
                    <img
                      src={user.imageUrl}
                      alt={user.firstname}
                      className={`w-12 h-12 rounded-full object-cover ${ onlineusers?.[user._id]?.online 
                          ? "ring-2 ring-green"
                          : ""}`} />




                    <div className='flex flex-col'>
                      <span className='font-semibold text-black'>
                        {user.firstname} {user.lastname}
                      </span>
                      <span className='text-sm text-textt'>
                        {user.position}
                      </span>
                      <span className="block text-xs text-right opacity-70 mt-1">

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

            <div className={`bg-white border-gray rounded-xl w-full xl:w-[70%] md:w-[60%] xl:block  m-5 relative ${!activeuser?"hidden md:block":"block"}`}>
                <div className=''>

                  {activeuser ? (
                    <>
                       
{!backe &&(

<button onClick={handleBackToUsers} className='xl:hidden md:block'><BiLeftArrow /></button>
)

}
                      <div className={`flex gap-3 text-center items-center m-5   border-b border-gray `}>
                        <img
                          src={activeuser.imageUrl}
                          alt={activeuser.firstname}
                          className='w-12 h-12 rounded-full object-cover' />
                        <div className='flex flex-col'>
                          <span className='font-medium'>
                            {activeuser.firstname} {activeuser.lastname}
                          </span>
                          <span className='text-sm text-textt'>
                            {activeuser.position}

                          </span>
                          {activeuser?.isOnline ? (
                            <span className="text-green-500 text-xs">Online</span>
                          ) : (
                            <span className="block text-xs text-right opacity-70 mt-1">
                              {formattime(activeuser?.lastSeen)}
                            </span>
                          )}

                        </div>

                      </div>

                      <div className="p-5 space-y-2 h-[50vh] overflow-y-auto">
                        {getmessages.map((msg) => (
                          <div
                            key={msg._id}
                            className={`max-w-[60%] p-2 rounded-lg  ${msg.senderId === user._id
                                ? "ml-auto bg-blue-500 text-white"
                                : "mr-auto bg-gray"}`}
                          >
                            {msg.message}
                            <span className="block text-xs text-right opacity-70 mt-1">
                              {formattime(msg.createdAt)}
                            </span>
                          </div>
                        ))}
                      </div>


                      <form onSubmit={message} className=''>

                        <div className=' flex inset-x-0  bg-white bottom-0 text-center items-center m-5 border-t border-gray '>


                          <input type="text" placeholder='Type here' name='message' value={form.message} onChange={handle}
                            className=' flex  h-10 inset-x-0 w-[80%]  bottom-0 overflow-hidden outline-none' />
                          <button type='submit'><BiRightArrow className='text-xl' /></button>


                        </div>
                      </form>
                    </>
                  ) : (
                    <div className={`  mt-48 font-bold text-2xl underline underline-offset-8 `}>
                      <span className='flex  justify-center'><PiChatCircleDots className='text-4xl' /></span>
                      <h1 className='flex  justify-center '>Please Select User and
                        Start Chats
                      </h1>
                    </div>
                  )}
                </div>




              </div>
    </div>
   
</section>
</>
  
                )
              }

export default Chat