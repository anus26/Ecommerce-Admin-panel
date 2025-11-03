import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { IoMdArrowForward } from "react-icons/io";
const Channels = () => { 

const [Visit,setVisit]=useState([])

const fetch=async()=>{
    const res=await axios.get("http://localhost:5000/api/v1/getvisit")
    console.log("Succussfully",res.data);
    setVisit(res.data.Visit)
  }
  useEffect(()=>{
    fetch()
    
  },[])








  
         const   options= {
              chart: {
                type: 'area',
                height: 350,
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              
         
            //   labels: series.monthDataSeries1.dates,
              xaxis: {
                type: 'datetime',
              },
              yaxis: {
                opposite: true
              },
              legend: {
                horizontalAlign: 'left'
              }
            }
            const series = [
  {
    name: "Visitors",
     data: Visit.map((item)=>({
      x:item.ip,
      y:item.browser
     }))
  }
];

  return (
<>
<section>
    <div className='Channels flex'>
        {/* channels 1 */}
        <div className='border border-gray rounded-lg m-5  w-[28%] text-left bg-white '>
           <div className='m-5 '>
            <h1  className='font-semibold text-lg'>Top Channels</h1>
            
            <table className="min-w-full text-left border-collapse m-3">
  <thead className=" ">
    <tr >
      <th className="text-textt">Source</th>
      <th className="text-textt">Visitors</th>
    </tr>
  </thead>

  <tbody className="text-textt">
    <tr className="border-b border-gray transition">
      <td className="px-6 py-3">Google</td>
      <td className="px-6 py-3">4.7k</td>
    </tr>
    <tr className="border-b border-gray transition">
      <td className="px-6 py-3">Instagram</td>
      <td className="px-6 py-3">3.2k</td>
    </tr>
    <tr className="border-b border-gray transition">
      <td className="px-6 py-3">Facebook</td>
      <td className="px-6 py-3">2.8k</td>
    </tr>
    <tr className="border-gray border-b transition">
      <td className="px-6 py-3">Twitter</td>
      <td className="px-6 py-3">1.5k</td>
    </tr>
  </tbody>
</table>
<button className='border bg-white font-bold hover:bg-gray rounded-lg text-textt  border-gray duration-300 transition-all w-64 h-12 flex m-5 p-2 text-center  justify-center items-center'>
    Channels Report <span><IoMdArrowForward className='w-10 text-xl ' /></span>
</button>

            </div>
           </div>
     {/* 2 */}
      <div className='border border-gray rounded-lg m-5  w-[28%] text-left bg-white '>
           <div className='m-5 '>
            <h1  className='font-semibold text-lg'>Top Channels</h1>
            
            <table className="min-w-full text-left border-collapse m-3">
  <thead className=" ">
    <tr >
      <th className="text-textt">Source</th>
      <th className="text-textt">Visitors</th>
    </tr>
  </thead>

  <tbody className="text-textt">
    <tr className="border-b border-gray transition">
      <td className="px-6 py-3">Google</td>
      <td className="px-6 py-3">4.7k</td>
    </tr>
    <tr className="border-b border-gray transition">
      <td className="px-6 py-3">Instagram</td>
      <td className="px-6 py-3">3.2k</td>
    </tr>
    <tr className="border-b border-gray transition">
      <td className="px-6 py-3">Facebook</td>
      <td className="px-6 py-3">2.8k</td>
    </tr>
    <tr className="border-gray border-b transition">
      <td className="px-6 py-3">Twitter</td>
      <td className="px-6 py-3">1.5k</td>
    </tr>
  </tbody>
</table>
<button className='border bg-white font-bold hover:bg-gray rounded-lg text-textt  border-gray duration-300 transition-all w-64 h-12 flex m-5 p-2 text-center  justify-center items-center'>
    Channels Report <span><IoMdArrowForward className='w-10 text-xl ' /></span>
</button>

            </div>
           </div>
           <div>
             <div className='chart border border-gray rounded-lg m-5  w-[100%] text-left bg-white'>
                <ReactApexChart   options={options} type='area' series={series} height={350} />
              </div>
           </div>
        </div>
    
</section>
</>
  )
}

export default Channels