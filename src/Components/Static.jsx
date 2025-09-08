import React, { useState } from 'react'
import Chart from "react-apexcharts";
import dayjs from 'dayjs';
import Calendar from 'react-calendar'
import { SlCalender } from "react-icons/sl";
import 'react-calendar/dist/Calendar.css'
import axios from 'axios';
import { FaSalesforce } from 'react-icons/fa';
import { useEffect } from 'react';
// dayjs.extend(quarterOfYear)
const Static = () => {
const [active ,setActive]=useState("overview")
const [open ,setOpen]=useState(false)
const [date,setDate]= useState(new Date())
const [datamonth,setDataMonth]=useState([])
// calender
const handlecalender=()=>{
  
  setOpen(!open)
}



 

  const fetch=async()=>{
        const res=await axios.get("http://localhost:5000/api/v1/get")
    console.log("Succussfully",res.data);
    setDataMonth(res.data.months)
  }
  useEffect(()=>{
    fetch()
},[])
    const  options = {
   
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
          colors: ['#008FFB', '#00E396'],
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'category',
         
          },
              //  group: {
              //       style: {
              //           fontSize: '10px',
              //           fontWeight: 700
              //       },
              //       groups: [
              //           { title:'', cols: 12 },
                       
              //       ]
              //   }
       
        tooltip: {
          x: {
            formatter: function(val){
              return val
            }
          },
        },
    }
// 👇 Replace your series with this
const allSeries = [
  {
    name: 'Sale',
   data:datamonth.map((item)=>({
  x:item.month,
  y:Number(item.sale) || 0,
  })),
  },
  {
    name: 'Revenu',
    data:datamonth.map((item)=>({
  x:item.month,
 y: Number(item.Revenu) || 0,    // safe access
  })),
},
];

// 👇 Dynamically filter series based on active state
const getSeries = () => {
  if (active === "overview") return allSeries;
  if (active === "sale") return [allSeries[0]];
  if (active === "Revenu") return [allSeries[1]];
  return allSeries;
};
console.log("Chart Series", allSeries)

  return (
   <>
   <div className='border border-gray bg-white  rounded-xl'>



    <div className='flex  justify-between m-6  '>
    <h1 className='font-semibold text-xl'>Statistics </h1>

    <div className='flex'>
  <div className='flex  gap-4 border border-gray p-2' >
    {['overview','sale','Revenu'].map((btn)=>(

      
      
      <button key={btn} className={`border border-gray px-2 p-1 rounded-lg ${active ===btn?'bg-white  text-black':""}`} onClick={()=>setActive(btn)} >
 {btn.charAt(0).toUpperCase()+btn.slice(1)}
     </button>
    ))}

  </div>
 <div className='relative'>

<button onClick={handlecalender}   className='p-2 rounded-lg  bg-gray hover:bg-gray1' >
  <SlCalender size={20}/> <p className='text-center text-sm text-gray-500 mt-2'>Selected: {dayjs(date).format("DD MMM YYYY")}</p>

</button>
{ open &&(
  <div className='absolute border right-0 mt-2 z-50 shadow-lg bg-white p-2 rounded-lg m-2'>

<Calendar  
onChange={setDate}
value={date}
className='rounded-lg'
/>

</div>
)

}
</div>
    </div>
    <div>
   </div>
    </div>
    <p className='m-5' > Target you’ve set for each month</p>
    
        <Chart options={options} series={getSeries()} type="area"   height={350}/>
    </div>
   </>
  )
}

export default Static