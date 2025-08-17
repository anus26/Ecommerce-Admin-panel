import React, { useState } from "react";
import { PiDotsThreeVertical } from "react-icons/pi";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [open,setOpen]=useState(false)
  
  const options = {
    chart: {
      id: "radialBar",
      offsetY: -20,
                sparkline: {
                  enabled: true
                }
    },
    plotOptions:{
      radialBar:{
        startAngle:-90,
        endAngle:90,
        hollow:{
          margin:0,
          size:"70%",
        },
        track:{
          background:"#e7e7e7",
          strokeWidth:"100%",
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
            offsetY:-2,
            fontSize:'20px'
          }
        }
      }
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
  const  series=[75.5]
  const menuItems=[
    {id:'Viewmore'},
    {id:'Delete'}
  ]

  return (
    <>
    
  <div className="bg-white p-4 rounded-xl shadow-md">
  {/* Top Part - White */}
  <div className="flex justify-between">
    <h1 className="text-xl font-semibold">Monthly Target</h1>
    <div className="relative">
      <PiDotsThreeVertical onClick={() => setOpen(!open)} />
      {open && (
        <div className="absolute bg-white w-32 h-20 right-0 top-0 m-4 border rounded-xl">
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
  <div className="mt-2 ">
    <h1 className="font-medium">Target you've set for each month</h1>
    <Chart
      options={options}
      series={series}
      type="radialBar"
      height={430}
    />
    <h1 className="text-center font-semibold mt-2">
      +10% You earn $3287 today, it's higher than last month. Keep up your good work!
    </h1>
  </div>
</div>

{/* Bottom Part - Slate Background */}
<div className="bg-slate-100 p-4  rounded-b-xl shadow-md">
  <div className="flex justify-between text-slate-400 text-lg">
    <h1>Target</h1>
    <h1>Revenue</h1>
    <h1>Today</h1>
  </div>
  <div className="flex justify-between mt-2">
    <h1 className="text-xl">$20k</h1>
    <h1 className="text-xl">$20k</h1>
    <h1 className="text-xl">$20k</h1>
  </div>
</div>

    </>
  );
};

export default ApexChart
