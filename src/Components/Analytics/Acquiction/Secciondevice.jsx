import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'




const Secciondevice = () => {
const [visit,setVisit]=useState([])

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


    const deviceCount=visit.reduce((acc,item)=>{
        acc[item.device]=(acc[item.device]||0)+1
        return acc
},{})

const labels=Object.keys(deviceCount)
   const series=Object.values(deviceCount)  

const options = {
  chart: {
    type: "donut",
    height:400,
    width:400
   

  },
  colors: ["#3641f5", "#465fff", "#667085"],
  labels,
  legend: {
    position: "bottom",
  },
  responsive: [
    {
      breakpoint: 1280,
      options: {
        chart: {
          width:400,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 300,
        },
      },
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 360,
      options: {
        chart: {
          width: 300,
        },
      },
    },
  ],
};

          
          
    

  return (
<>
<section className='Device '>
    <div className='m-5 device bg-white rounded-xl border-xl   '>

    <div className=''>
      

<h1 className='font-semibold text-xl m-5 p-5'>Sessions by Device</h1>
            <div className="chart m-5 flex justify-center items-center">
  <ReactApexChart 
    options={options} 
    series={series} 
    type="donut"
    width={400}
    height={400}
  />
</div>


    </div>
    </div>

</section>
</>
  )
}

export default Secciondevice