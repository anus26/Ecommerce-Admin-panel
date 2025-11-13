import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import Secciondevice from './Secciondevice'

const Acquiction = () => {
const [visit,setVisit]=useState([])
const fetch=async()=>{
    const res=await axios.get("http://localhost:5000/api/v1/getvisit")
    console.log("Succussfully",res.data);
    setVisit(res.data.visit)
  }
  useEffect(()=>{
    fetch()
    sendVisit
  },[])

  const sendVisit = async () => {
  try {
    await axios.post("http://localhost:5000/api/v1/visit");
    console.log("Visit saved ✅");
  } catch (error) {
    console.log("Visit error ❌", error);
  }
};
const monthSourceData={}

  visit.forEach((item) => {
    const date = new Date(item.createdAt);
    const month = date.toLocaleString("default", { month: "short", year: "numeric" });
    const source = item.source || "Unknown";

    if (!monthSourceData[month]) monthSourceData[month] = {};
    monthSourceData[month][source] = (monthSourceData[month][source] || 0) + 1;
  });
    const months=Object.keys(monthSourceData)
    const sources=Array.from(
        new Set(visit.map((v)=>v.source||"unknown"))
    )           

   

 const series = sources.map((source) => ({
    name: source,
    data: months.map((month) => monthSourceData[month][source] || 0),
  }));
         const   options= {
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                  show: false
                },
                // zoom: {
                //   enabled: true
                // }
              },
                  colors: ['#465fff',"#3788d8","#3641f5"],
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  horizontal: false,
                  borderRadius: 20,
                     columnWidth:'10%',
                  borderRadiusApplication: 'end', // 'around', 'end'
                  borderRadiusWhenStacked: 'last', // 'all', 'last'
                  dataLabels: {
                    total: {
                      enabled: true,
                      style: {
                        fontSize: '13px',
                        fontWeight: 900
                      }
                    }
                  }
                },
              },
              xaxis: {
                 categories: months,
                // title:{text:"Month"}
                
                
            
              },
                yaxis: {
   show:false
    },
              legend: {

                position: 'top',
                offsetY: 4
              },
              fill: {
                opacity: 1
              }
              
            }
          
          
      
  return (
    <>
    <section>
        <div className='Acquiction flex'>
           <div className='bg-white border rounded-xl border-gray m-5 w-[60%] scroll-y'>
            <h1 className='font-bold text-xl m-5'>Acquisition Channels</h1>

            

             <div id="chart  ">
                <ReactApexChart options={options} series={series} type="bar" height={350} width={700}/>
              </div>
           </div>
           <Secciondevice/>

        </div>

    </section>
    </>
  )
}

export default Acquiction