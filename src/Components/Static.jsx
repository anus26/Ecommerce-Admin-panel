import React, { useState } from 'react'
import Chart from "react-apexcharts";
import dayjs from 'dayjs';
import Calendar from 'react-calendar'
import { SlCalender } from "react-icons/sl";
import 'react-calendar/dist/Calendar.css'
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
  const handleclick=()=>{
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
   <div>
 
    <div className='flex justify-between  '>
    <h1>Statistics </h1>
    <div className='flex'>
  <div className='flex gap-4 border bg-gray-200 p-2' onClick={()=>handleclick(move,move1,move2)}>

     <button className={`border px-2 p-1 rounded-lg ${active ==="overview"?'bg-white  text-black':""}`} onClick={()=>setActive("overview")} >
      Overview
     </button>
   <button className={`border px-2 p-1 rounded-lg ${active ==="sales"?'bg-white  text-black':""}`} onClick={()=>setActive("sales")} >
      Sales
     </button>
 <button className={`border px-2 p-1 rounded-lg ${active ==="Revenu"?'bg-white  text-black':""}`} onClick={()=>setActive("Revenu")}>
      Revenu
     </button>
  </div>
 <div className='relative'>
<button  onClick={handlecalender} >
  <SlCalender size={20}/>

</button>
{ open &&(
  <div className='absolute border bg-white p-2 rounded-lg m-2'>

<Calendar  
onChange={setDate}
value={date}
className='rounded-lg'
/>
<p>Selected: {dayjs(date).format("DD MMM YYYY")}</p>
</div>
)

}
</div>
    </div>
    <div>
   </div>
    </div>
        <Chart options={options} series={getSeries()} type="area"   height={350}/>
    </div>
   </>
  )
}

export default Static