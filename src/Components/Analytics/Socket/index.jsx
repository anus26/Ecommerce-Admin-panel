import React, { useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { AppContext } from '../../../Context/AppContext'
// const socket=io('https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app', { transports: ["websocket"] })
const Socket = () => {

const {liveVisitors}=useContext(AppContext)

 
  //   socket.on("onlineUsers", (data) => {
  //     setOnlineUsers(data);
  //   });

  //   socket.on("liveVisitors", (count) => {
  //     setLiveVisitors(count);
  //   });
  //     return () => {
  //     socket.off("onlineUsers");
  //     socket.off("liveVisitors");
  //   };
  // }, []);
    
  return (
<div className='flex gap-2 text-textt  '>
  <div className="relative flex items-center justify-center">
    {/* Pulsing circle above */}
    <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-50 animate-ping"></span>
    {/* Solid red dot */}
    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
  </div>
  <h1 className='font-semibold text-2xl'>{liveVisitors}</h1>
  <span>Live Visitor</span>

</div>

  )
}

export default Socket