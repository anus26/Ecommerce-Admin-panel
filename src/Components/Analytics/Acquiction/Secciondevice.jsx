import axios from 'axios'
import { Colors } from 'chart.js'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'




const Secciondevice = () => {
const [visit,setVisit]=useState([])

const fetch=async()=>{
    const res=await axios.get("http://localhost:5000/api/v1/getvisit")
    // console.log("Succussfully",res.data);
    setVisit(res.data.visit)
  }
  useEffect(()=>{
    fetch()
    sendVisit()
  },[])


const sendVisit = async () => {
  try {
    await axios.post("http://localhost:5000/api/v1/visit");
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

const options= {
              chart: {
                // width: 380,
                type: 'donut',
              },
              colors:["#3641f5","#465fff","#667085"],
              labels,
            //   dataLabels: {
            //     enabled: false
            //   },
              legend: {
      position: "bottom",
    },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
              
                  legend: {
                    show: false
                  }
                }
              }],
              
          
            }
          
          
    

  return (
<>
<section className='Device'>
    <div className='device bg-white rounded-xl border-xl m-5'>
<h1>Sessions by Device</h1>
                  <div id="chart">
                <ReactApexChart options={options} series={series} type="donut" width={380} />
              </div>

    </div>

</section>
</>
  )
}

export default Secciondevice