import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PiDotsThreeVertical } from "react-icons/pi";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "leaflet/dist/leaflet.css";

const Global = () => {
const [position,setPosition]=useState(null)
    const [open,setOpen]=useState(false)
    const menuItems=[
    {id:'Viewmore'},
    {id:'Delete'}
  ]
// current loaction
useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
        (pos)=>{
setPosition([pos.coords.latitude,pos.coords.longitude])
        },
        (err)=>{
            console.error(err);
            
        }
    )
},[])
  return (
    <div className="border border-gray bg-white rounded-xl m-5 w-[40%]">
        <div className="flex justify-between m-5">
   <h1 className="font-semibold text-lg">Customers Demographic</h1>
    <div className="relative">
         <PiDotsThreeVertical onClick={() => setOpen(!open)} />
         {open && (
           <div className="absolute bg-white w-32 h-20 right-0 top-0 m-4 border border-gray rounded-xl">
             {menuItems.map((item) => (
               <div key={item.id} className="m-2 font-lg">
                 {item.id}
               </div>
             ))}
           </div>
         )}
       </div>
        </div>
        <p className="ml-5 font-medium ">Number of customer based on country</p>

    <div style={{ height: "30vh", width: "80%" }} className="m-6 rounded-xl border border-gray">
      <MapContainer  center={position || [20,0]} zoom={position? 13:2} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            {position &&(
        <Marker  position={position}>
          <Popup>

          You are here <br />
          Latitude: {position[0]} <br />
          Longitude:{position[1]}


          
          </Popup>
        </Marker>
          )}
      </MapContainer>
    </div>
    <div className="flex justify-between m-5">
        <div className="flex gap-2 items-center">
         <img src="./images/world.png" alt="" className="w-10" />
         <div>

         <p className="font-bold">SA</p>
         <p>115,11 Customers</p>
         </div>

        </div>
      <div className="w-[30%] flex justify-center items-center py-4">
  <div className="w-56 bg-gray rounded-full h-3">
    <div
      className="bg-blue-500 h-3 rounded-full"
      style={{ width: "79%" }}
    >

        </div> 
  </div>
  <span>79%</span>
</div>

        
        


    </div>
     <div className="flex justify-between m-5">
        <div className="flex gap-2 items-center">
         <img src="./images/flag.png" alt="" className="w-10" />
         <div>

         <p className="font-bold">PK</p>
         <p>115,11 Customers</p>
         </div>

        </div>
        
        
      <div className="w-[30%] flex justify-center items-center py-4">
  <div className="w-56 bg-gray rounded-full h-3">
    <div
      className="bg-blue-500 h-3 rounded-full"
      style={{ width: "23%" }}
    >

        </div> 
  </div>
  <span>23%</span>
</div>

    </div>
    </div>
  );
};

export default Global;
