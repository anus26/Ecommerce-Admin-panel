import React, { useState } from 'react'
import Chart from "react-apexcharts";
import dayjs from 'dayjs';
import Calendar from 'react-calendar'
import { SlCalender } from "react-icons/sl";
import 'react-calendar/dist/Calendar.css'
import axios from 'axios';
// dayjs.extend(quarterOfYear)
const Static = () => {
const [active ,setActive]=useState("overview")
const [open ,setOpen]=useState(false)
const [date,setDate]= useState(new Date())

// calender
const handlecalender=()=>{
  
  setOpen(!open)
}



 
// button
  const handleclick=async()=>{
    const res=await axios.get("http://localhost:5000/api/v1/get")
    console.log("Succussfully",res.data);
    
    setMove()
    console.log('move');
    
  }
    const  options = {
   
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          labels:{
            formatter:function(val,timestamp){
              return dayjs(timestamp).format('MMM')
            }
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
        },
        tooltip: {
          x: {
            formatter: function(val,timestamp){
                   return dayjs(val,timestamp).format('MMM')
            }
          },
        },
    }
// 👇 Replace your series with this
const allSeries = [
  {
    name: 'Sales',
    data: [
      { x: '2019/01/01', y: 400 },
      { x: '2019/04/01', y: 430 },
      { x: '2019/07/01', y: 648 },
      { x: '2019/10/01', y: 470 },
      { x: '2020/01/01', y: 840 },
      { x: '2020/04/01', y: 280 },
      { x: '2020/07/01', y: 390 },
      { x: '2020/10/01', y: 690 }
    ]
  },
  {
    name: 'Revenu',
    data: [
      { x: '2019/01/01', y: 400 },
      { x: '2019/04/01', y: 430 },
      { x: '2019/07/01', y: 648 },
      { x: '2019/10/01', y: 470 },
      { x: '2020/01/01', y: 840 },
      { x: '2020/04/01', y: 580 },
      { x: '2020/07/01', y: 690 },
      { x: '2020/10/01', y: 390 }
    ]
  }
];

// 👇 Dynamically filter series based on active state
const getSeries = () => {
  if (active === "overview") return allSeries;
  if (active === "sales") return [allSeries[0]];
  if (active === "Revenu") return [allSeries[1]];
  return allSeries;
};

  return (
   <>
   <div className='border border-gray bg-white  rounded-xl'>



    <div className='flex  justify-between m-6  '>
    <h1 className='font-semibold text-xl'>Statistics </h1>

    <div className='flex'>
  <div className='flex  gap-4 border border-gray p-2' >
    {['overview','sales','Revenu'].map((btn)=>(

      
      
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