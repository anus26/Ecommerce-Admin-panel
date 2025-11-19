import React, { useState } from "react";
import { PiDotsThreeVertical } from "react-icons/pi";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [open,setOpen]=useState(false)
  
  const options = {
    chart: {
      id: "radialBar",
      type:"radialBar",
      offsetY: -20,
                sparkline: {
                  enabled: true
                }
    },
     responsive: [
      { breakpoint: 1280, options: { chart: { width: 500, height: 350 } } },
      { breakpoint: 1024, options: { chart: { width: 400, height: 350 } } },
      { breakpoint: 768, options: { chart: { width: 300, height: 350 } } },
      { breakpoint: 480, options: { chart: { width: 250, height: 200 } } },
    ],
    colors: ['#465fff'],
    plotOptions:{
      radialBar:{
        startAngle:-99,
        endAngle:90,
        columnWidth:"20%",
        hollow:{
          margin:0,
          size:"80%",
        },

        track:{
          background:"#e7e7e7",
          strokeWidth:"60%",
          margin:5,//margin in pixels
          dropshadow:{
            enabled:true,
            top:2,
            left:0,
            color:'#444',
            opacity:1,
            blur:2
          }
        },
        dataLabels:{
          name:{
            show:false,
            
            
            
            
          },
          value:{
            offsetY:-25,
            fontSize:'40px',
            fontWeight:"bold",
    

          },
        

        }
      }
    },
    stroke:{
     lineCap:"round",
     width:3
    },
    grid:{
      padding:{
        top:-10
      }
    },
    fill:{
      type:'gradient',
      gradient:{
        shade:'light',
        shadeIntensity:0.4,
        inverseColors:false,
        opacityFrom:1,
        opacityTo:1,
        stops:[0,50,53,91]
      },
    },
    labels:['Average Results']
  }
  const  series=[75.55]
  // const  series1=[+10]
  const menuItems=[
    {id:'Viewmore'},
    {id:'Delete'}
  ]

  return (
    <>
    <div className="bg-gray1 rounded-xl ">

  <div className="bg-white p-4 rounded-xl outline-none min-h-[420px] ">
  {/* Top Part - White */}


  <div className="flex justify-between m-3">
    <h1 className="text-xl font-semibold ">Monthly Target</h1>
    <div className="relative">
      <PiDotsThreeVertical onClick={() => setOpen(!open)} />
      {open && (
        <div className="absolute bg-white w-32 h-32 right-0 top-0 m-4 border rounded-xl">
          {menuItems.map((item) => (
            <div key={item.id} className="m-2 font-lg">
              {item.id}
            </div>
          ))}
        </div>
      )}
    </div>
          </div>

  {/* Chart */}
  <div className=" m-3 ">
    <h1 className="font-medium text-textt ">Target you've set for each month</h1>
    <div className="mt-4 flex justify-center">

    <Chart
      options={options}
      series={series}
      type="radialBar"
      height={350}
      />
      </div>
    <h1 className="text-center font-semibold text-textt mt-2">
      +10% You earn $3287 today, it's higher than last month. Keep up your good work!
    </h1>
  </div>


      </div>

{/* Bottom Part - Slate Background */}
<div className=" p-4 bg-slat ">
  <div className="flex justify-between text-textt text-lg">
    <h1 >Target</h1>
    <h1>Revenue</h1>
    <h1>Today</h1>
  </div>
  <div className="flex justify-between mt-2">
    <h1 className="text-xl flex">$20k <span><img src="./images/arrow.png" alt="arrow" className="w-8" /></span></h1>
    <h1 className="text-xl flex">$20k <span><img src="./images/arrows.png" alt="arrows" className="w-6" /></span></h1>
    <h1 className="text-xl flex">$20k <span><img src="./images/arrows.png" alt="arrows" className="w-6" /></span></h1>
  </div>
</div>
      </div>

    </>
  );
};

export default ApexChart
