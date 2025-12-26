import React, { useContext, useEffect, useState } from 'react'
import { CgAdd } from 'react-icons/cg'
import { IoAdd } from 'react-icons/io5'
import Analyticsgraph from '../../Components/Analytics/Anaylticsgraph'
import Channels from '../../Components/Analytics/Channels'
import Acquiction from '../../Components/Analytics/Acquiction'
import Globalandproduct from '../../Components/Analytics/Globalandproduct'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'

const Analytics = () => {
  const {liveVisitors}=useContext(AppContext)
  const [totalvisit ,setTotalVisit]=useState("")
  const  totalsecond=(totalvisit?.visit?.length||0)*60
  const  minutes=Math.floor(totalsecond/60)
  const seconds=totalsecond%60
  
  const Visit=async()=>{
    const res=await axios.get("https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/getvisit",{
      withCredentials:true
    })
  setTotalVisit(res.data)
  console.log("total  visit ",res.data);
  
  }

useEffect(()=>{
  Visit()
},[])
  return (
 <>
 <section>
  <div className='Analytics '>
    <div className='m-5 grid justify-between gap-5 lg:grid-cols-4   md:grid-cols-2 grid-cols-1'>
      {/* first 1 */}
      <div className='bg-white border border-gray rounded-xl  h-28  '>
        <div className='m-5 '>

        <h1 className='text-textt '>Unique Visitors</h1>
      <br />
         <div className='flex items-center justify-between '>
          <h1 className='font-bold text-2xl'>{liveVisitors}K</h1>
           <span className=" flex text-green bg-dark px-2 py-1 text-xs rounded-full">
          <IoAdd/>20%
          </span>
          <span className='text-textt text-sm'>Vs last month</span>
         </div>
        </div>
      </div>
      {/* 2 */}
       <div className='bg-white border border-gray rounded-xl  h-28'>
        <div className='m-5 '>

        <h1 className='text-textt '>Total Pageviews</h1>
      <br />
         <div className='flex items-center justify-between '>
<h1 className="font-bold text-2xl">
  {totalvisit.visit?.length || 0}K
</h1>


           <span className=" flex text-green bg-dark px-2 py-1 text-xs rounded-full">
          <IoAdd/>20%
          </span>
          <span className='text-textt text-sm'>Vs last month</span>
         </div>
        </div>
      </div>
{/*3 */}
 <div className='bg-white border border-gray rounded-xl  h-28'>
        <div className='m-5 '>

        <h1 className='text-textt '>Bounce Rate</h1>
      <br />
         <div className='flex items-center justify-between '>
<h1 className="font-bold text-2xl">

  {((totalvisit?.visit?.length || 0) / 100).toFixed(2)}%


</h1>

           <span className=" flex text-green bg-dark px-2 py-1 text-xs rounded-full">
          <IoAdd/>20%
          </span>
          <span className='text-textt text-sm'>Vs last month</span>
         </div>
        </div>
      </div>
      {/* 4 */}
      <div className='bg-white border border-gray rounded-xl  h-28'>
        <div className='m-5 '>

        <h1 className='text-textt '>visit Duration</h1>
      <br />
         <div className='flex items-center justify-between gap-5'>
          <h1 className='font-bold text-2xl'>{minutes}m{seconds}s</h1>
           <span className=" flex text-green bg-dark px-2 py-1 text-xs rounded-full">
          <IoAdd/>20%
          </span>
          <span className='text-textt text-sm'>Vs last month</span>
         </div>
        </div>
      </div>
    </div>
  <div>
    <div>
      <Analyticsgraph/>
    </div>
    <div>
      <Channels/>
    </div>
<div>
  <Acquiction/>
</div>
<div>
 <Globalandproduct/>
</div>
  </div>
  </div>
 </section>

 </>
  )
}

export default Analytics