import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { IoMdArrowForward } from "react-icons/io";
import Socket from './Socket';
const Channels = () => { 

const [visit,setVisit]=useState([])
const [chartIndex,setChartIndex]=useState(0)

const fetch=async()=>{
    const res=await axios.get("https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/getvisit")
    // console.log("Succussfully",res.data);
    setVisit(res.data.visit)
  }
  useEffect(()=>{
    fetch()
    sendVisit()
  },[])


const sendVisit = async () => {
  try {
    await axios.post("https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/visit");
    console.log("Visit saved ✅");
  } catch (error) {
    console.log("Visit error ❌", error);
  }
};

const browserCount = visit.reduce((acc, item) => {
  acc[item.browser] = (acc[item.browser] || 0) + 1;
  return acc;
}, {});

const deviceCount=visit.reduce((acc,item)=>{
  acc[item.device]=(acc[item.device]||0)+1
  return acc
},{})


const ipCount=visit.reduce((acc,item)=>{
  acc[item.ip]=(acc[item.ip]||0)+1
  return acc
},{})


useEffect(()=>{
  const interval=setInterval(fetch,500)
  return()=>clearInterval(interval)
  return acc
}) 


  // ✅ Rotate chart every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setChartIndex(prev => (prev + 1) % ChartData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // const visit=[
  //   {
  //     visit.browser
  //   },{visit.device}
  // ]

const ChartData=[
  {
    title:"Visitor by Browser",
    categories:Object.keys(browserCount),
    value:Object.values(browserCount)
  },
    {
    title:"Visitor by Device",
    categories:Object.keys(deviceCount),
    value:Object.values(deviceCount)
  },
    {
    title:"Visitor by Ip",
    categories:Object.keys(ipCount),
    value:Object.values(ipCount)
    }

]



  
         const   options= {
              chart: {
                type: 'area',
                height: 350,
                zoom: {
                  enabled: false
                },
               toolbar:{show:false}
              },
              //  colors: ['#3788d8'],
               dataLabels: {
                 enabled: false
                },        
                stroke:{
                  curve:"smooth" ,
                  with:2,
                  colors: ['#3788d8'],
                },
          
              fill:{
               type:"gradient",
              //  color:['#000'],
              //  opacity:0.4,
               opacityFrom: 0.4,
opacityTo: 0.1,

                   gradientToColors: ['#7da7ff'],
                    colorStops: [
        {
          offset: 0,
          color: "#60A5FA", // Light blue top
          opacity: 0.5
        },
        {
          offset: 100,
          color: "#FFFFFF", // White bottom
          opacity: 0.1
        },
      ] 
              },
              
         
            //   labels: series.monthDataSeries1.dates,
              xaxis: {
                 categories: ChartData[chartIndex]?.categories||[],
                
               labels:{show:false},
               axisBorder:{show:false},
               axisTicks:{show:false},
              },
            yaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  grid:{
show:false
  },

              legend: {
              show:false
              }
            }
            const series = [
  {
    name: ChartData[chartIndex]?.title,
  data: 
    ChartData[chartIndex]?.value||[]
  
  

  }
];

  return (
<>
<section>
    <div className='Channels grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
        {/* channels 1 */}
        <div className='border border-gray rounded-lg m-5   text-left bg-white h-96  '>
           <div className='m-3 '>
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
      <div className='border border-gray rounded-lg m-5   text-left bg-white h-96 '>
           <div className='m-3 '>
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
           <div className='border border-gray rounded-lg m-5 md:col-span-2  bg-white  lg:col-span-1 '>
            <h1 className='font-bold text-2xl m-5'>Active Users</h1>
            <h1 className='m-5 '><Socket/></h1>
             <div className='chart border border-gray rounded-lg m-5  text-left bg-gray3'>
                <ReactApexChart   options={options} type='area' series={series} height={250} />
              </div> 
             <div className='m-5 flex justify-center items-center gap-10'>

  <div className='flex flex-col items-center font-semibold text-xl pr-10 border-r border-textt'>
    224
    <span className='text-textt text-sm font-normal'>Avg. Daily</span>
  </div>

  <div className='flex flex-col items-center font-semibold text-xl pr-10 border-r border-textt'>
    224
    <span className='text-textt text-sm font-normal'>Avg. Daily</span>
  </div>

  <div className='flex flex-col items-center font-semibold text-xl'>
    224
    <span className='text-textt text-sm font-normal'>Avg. Daily</span>
  </div>

</div>

           </div>
        </div>
    
</section>
</>
  )
}

export default Channels