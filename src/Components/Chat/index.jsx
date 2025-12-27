import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { CiSearch } from 'react-icons/ci'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import axios from 'axios'
import { PiChatCircleDots } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const Chat = () => {
  const { user, socket, onlineusers, messageSound } = useContext(AppContext)
  const [alluser, setAllUser] = useState([])
  const [search, setSearch] = useState("")
  const [activeuser, setActiveUser] = useState(null)
  const [getmessages, setGetMessages] = useState([])
  const [backe, setBacke] = useState(true)
  const [form, setForm] = useState({ message: "" })

  // Fetch all users
  const userAll = async () => {
    const res = await axios.get('https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/user/alluser', { withCredentials: true })
    setAllUser(res.data)
  }

  useEffect(() => { userAll() }, [])

  // Socket listener for new messages
  useEffect(() => {
    if (!socket) return
    socket.on("newMessage", (msg) => {
      setGetMessages(prev => [...prev, msg])
      messageSound.play()
    })
    return () => socket.off("newMessage")
  }, [socket])

  // Get messages of selected user
  const getmessage = async (receiverId) => {
    try {
      const res = await axios.get(`https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/getmessage/${receiverId}`, { withCredentials: true })
      setGetMessages(res.data.messages)
    } catch (error) { console.log(error) }
  }

  const handleActiveuser = (selectedUser) => {
    setActiveUser(selectedUser)
    getmessage(selectedUser._id)
    setBacke(false) // Only affects mobile view
  }

  const handleBackToUsers = () => {
    setBacke(true)
    setActiveUser(null)
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleMessageSend = async (e) => {
    e.preventDefault()
    if (!activeuser) return
    try {
      const res = await axios.post(`https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/send/${activeuser._id}`, form, { withCredentials: true })
      setGetMessages(prev => [...prev, res.data])
      socket.emit("sendMessage", { receiverId: activeuser._id, msg: res.data })
      setForm({ message: "" })
      messageSound.play()
    } catch (error) { console.log(error) }
  }

  const filtersearch = alluser.filter(u => `${u.firstname} ${u.lastname}`.toLowerCase().includes(search.toLowerCase()))

  const formattime = (date) => {
    if (!date) return ""
    const d = new Date(date)
    const now = new Date()
    const isToday = d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    if (isToday) return `Last seen at ${d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    return `Last seen ${d.toLocaleDateString([], { day: "numeric", month: "short" })} at ${d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
  }

  return (
    <section className=''>
      {/* Header */}
      <div className='flex justify-between m-4'>
        <h1 className='font-semibold text-2xl'>Chat</h1>
        <div className='flex text-center items-center gap-2'>
          <Link to="/" className='text-textt'>Home</Link>
          <FaAngleRight />
          <span>Chat</span>
        </div>
      </div>

      <div className='flex justify-center'>
        {/* Users List */}
        <div className={`chat bg-white rounded-2xl p-2 m-5
          xl:block xl:w-[25%] md:w-[35%] 
          ${backe ? "block" : "hidden"} md:block`}>
          <h1 className='font-semibold text-2xl'>Chats</h1>
          <div className='relative w-[90%] m-4'>
            <CiSearch className='absolute mt-3 ml-2 text-xl' />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder='Search'
              className='border pl-8 p-2 w-full rounded-lg outline-none hover:border-primary'
            />
          </div>
          <div className='overflow-y-auto max-h-[60vh]'>
            {filtersearch.length > 0 ? filtersearch.map(user => (
              <div key={user._id} className={`flex items-center gap-5 p-2 hover:bg-gray-50 rounded-lg cursor-pointer ${activeuser?._id === user._id ? 'text-primary' : 'text-textt'}`}
                onClick={() => handleActiveuser(user)}>
                <img src={user.imageUrl} alt={user.firstname}
                  className={`w-12 h-12 rounded-full object-cover ${Array.isArray(onlineusers) && onlineusers.includes(user._id) ? "ring-2 ring-green" : ""}`} />
                <div className='flex flex-col'>
                  <span className='font-semibold'>{user.firstname} {user.lastname}</span>
                  <span className='text-sm text-textt'>{user.position}</span>
                </div>
              </div>
            )) : (
              <p className="text-gray-400 text-sm text-center mt-3">No users found</p>
            )}
          </div>
        </div>

        {/* Chat Box */}
        <div className={`bg-white rounded-xl m-5 
          xl:block xl:w-[70%] md:w-[60%]
          ${!activeuser ? "hidden md:block" : "block"}`}>
          {activeuser ? (
            <>
              {/* Mobile Back Button */}
              {!backe && <button onClick={handleBackToUsers} className='xl:hidden mb-2'><BiLeftArrow /></button>}

              {/* Chat Header */}
              <div className='flex items-center gap-3 m-5 border-b border-gray'>
                <img src={activeuser.imageUrl} alt={activeuser.firstname} className='w-12 h-12 rounded-full object-cover' />
                <div className='flex flex-col'>
                  <span className='font-medium'>{activeuser.firstname} {activeuser.lastname}</span>
                  <span className='text-sm text-textt'>{activeuser.position}</span>
                  {activeuser?.isOnline ? <span className='text-green-500 text-xs'>Online</span> :
                    <span className='text-xs text-gray-500'>{formattime(activeuser?.lastSeen)}</span>}
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-2 h-[50vh] overflow-y-auto">
                {getmessages.map(msg => (
                  <div key={msg._id} className={`max-w-[60%] p-2 rounded-lg ${msg.senderId === user._id ? "ml-auto bg-blue-500 text-white" : "mr-auto bg-gray"}`}>
                    {msg.message}
                    <span className="block text-xs text-right opacity-70 mt-1">{formattime(msg.createdAt)}</span>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleMessageSend} className='flex m-5 border-t border-gray pt-2'>
                <input type="text" name='message' value={form.message} onChange={handleChange} placeholder='Type here'
                  className='flex-1 h-10 p-2 border rounded-l-lg outline-none' />
                <button type='submit' className='bg-blue-500 px-4 rounded-r-lg text-white'><BiRightArrow className='text-xl' /></button>
              </form>
            </>
          ) : (
            <div className='mt-48 font-bold text-2xl text-center underline underline-offset-8'>
              <PiChatCircleDots className='text-4xl mx-auto mb-2' />
              <h1>Please Select User and Start Chat</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Chat
