import React from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
 
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
  const  series=[75]

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">

      <Chart options={options} series={series}type="radialBar"  height={430}  />
    </div>
  );
};

export default ApexChart
