import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
const socket=io('https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app', { transports: ["websocket"] })
const Socket = () => {
const [visitorcount , setVisitorCount]=useState(0)

useEffect(()=>{
    socket.on("visitorcount",(count)=>{
        console.log("visitor count",count);
        setVisitorCount(count)
        
    })
    return ()=>{
        socket.off("visitorcount")
    }
},[])
    
  return (
<div className='flex gap-2 text-textt  '>
  <div className="relative flex items-center justify-center">
    {/* Pulsing circle above */}
    <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-50 animate-ping"></span>
    {/* Solid red dot */}
    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
  </div>
  <h1 className='font-semibold text-2xl'>{visitorcount}</h1>
  <span>Live Visitor</span>

</div>

  )
}

export default Socket