import React, { useState , useEffect } from 'react'
import Chart from "react-apexcharts";
import dayjs from 'dayjs';
import Calendar from 'react-calendar'
import { SlCalender } from "react-icons/sl";
import 'react-calendar/dist/Calendar.css'
import axios from 'axios';
import { FaSalesforce } from 'react-icons/fa';

// dayjs.extend(quarterOfYear)
const Static = () => {
const [active ,setActive]=useState("overview")
const [open ,setOpen]=useState(false)
const [date,setDate]= useState(new Date())
const [datamonth,setDataMonth]=useState([])
const  [onemonth ,setOneMonth]=useState([])
// calender

const fetch=async()=>{
    const res=await axios.get("http://localhost:5000/api/v1/get")
    console.log("Succussfully",res.data);
    setDataMonth(res.data.months)
  }
  useEffect(()=>{
    fetch()
    
  },[])
  const handlecalender=async(month)=>{
      const res=await axios.get(`http://localhost:5000/api/v1/get/${month}`)
      console.log("Successfully",res.data.Aug);
      setOneMonth(res.data)
    setOpen(!open)
  }
  
  const  options = {
   
    chart: {
          height: 350,
          type: 'area'
        },
      
        dataLabels: {
          enabled: false
        },
          colors: ['#465fff', '#3641ff'],
        stroke: {
          curve: 'smooth',
          width:3
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

// 👇 Sabse pehle ye define karo (getSeries se pehle)
const allSeries = [
  {
    name: 'Sale',
    data: datamonth.map((item) => ({
      x: item.month,
      y: Number(item.sale) || 0,
    })),
  },
  {
    name: 'Revenu',
    data: datamonth.map((item) => ({
      x: item.month,
      y: Number(item.Revenu) || 0,
    })),
  },
];

// 👇 Ab ye function chalega
const getSeries = () => {
  if (active === "overview") return allSeries;
  if (active === "sale") return [allSeries[0]];
  if (active === "Revenu") return [allSeries[1]];

  // 👇 Agar ek month select hua hai, wo show karo
  if (onemonth.length > 0) {
    return [
      {
        name: "Sale",
        data: onemonth.map(item => ({
          x: item.month,
          y: Number(item.sale) || 0
        }))
      },
      {
        name: "Revenu",
        data: onemonth.map(item => ({
          x: item.month,
          y: Number(item.Revenu) || 0
        }))
      }
    ];
  }

  return allSeries;
};



return (
  <>
   <div className='border border-gray bg-white  m-5 w-[95%] rounded-xl'>



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

<button onClick={handlecalender} className='p-2 rounded-lg  bg-gray hover:bg-gray1' >
  <SlCalender size={20}/> <p className='text-center text-sm text-gray-500 mt-2'>Selected: {dayjs(date).format("DD MMM YYYY")}</p>

</button>
{ open &&(
  <div className='absolute border right-0 mt-2 z-50 shadow-lg bg-white p-2 rounded-lg m-2'>

<Calendar  
onChange={setDate}
value={date}
className='rounded-lg'
/>
{/* <button onClick={()=>{
  const month=dayjs(date).format(" MMM ")
  handlecalender(month)}}>click</button> */}

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