import React, { useState } from 'react'
import Chart from "react-apexcharts";
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import { PiDotsThreeVertical } from "react-icons/pi";
dayjs.extend(quarterOfYear)
const Monthly = () => {
    const [open,setOpen]=useState(false)
    const menuItems=[
    {id:'Viewmore'},
    {id:'Delete'}
  ]

const   options = {
          chart: {
          type: 'bar',
          height: 200
        },
        colors: ['#465fff'],
        plotOptions:{
bar:{
    borderRadius:5,
    borderRadiusApplication:'end',
    horizontal:false,
    columnWidth:'20%',
   

}
        },
        dataLabels:{
            enabled:false
        },
      
            xaxis: {
                type: 'category',
                labels: {
                    formatter: function(val) {
                        return  dayjs(val).format('MMM ')
                    }
                },
     
                group: {
                    style: {
                        fontSize: '10px',
                        fontWeight: 700
                    },
                    groups: [
                        { title:'', cols: 12 },
                       
                    ]
                }
            },
        
             tooltip: {
                y:{
                    formatter : function (val){
                        return `Sales :${val}`
                    }
                },
          x: {
            formatter: function(val) {
              return  dayjs(val).format('MMM ')
            }  
          }
        },
         
        };

       const      series= [{
          name: "sales",
data: [{
            x: '2019/01/01',
            y: 400
          }, {
            x: '2019/04/01',
            y: 430
          }, {
            x: '2019/07/01',
            y: 648
          }, {
            x: '2019/10/01',
            y: 470
          }, {
            x: '2020/01/01',
            y: 840
          }, {
            x: '2020/04/01',
            y: 280
          }, {
            x: '2020/07/01',
            y: 390
          }, {
            x: '2020/10/01',
            y: 690
          }]
        }]

      
      
      
    
  return (
<>
<div className=''>
    <div className='flex justify-between m-5'>
<h1 className='font-semibold text-xl'>Monthly Sales</h1>
  <div className="relative">
      <PiDotsThreeVertical onClick={() => setOpen(!open)} />
      {open && (
        <div className="absolute bg-white w-42 h-20 right-0 top-0 m-4 border border-gray rounded-xl">
          {menuItems.map((item) => (
            <div key={item.id} className="m-2 font-lg">
              {item.id}
            </div>
          ))}
        </div>
      )}
    </div>
        </div>
        <div className='w-full'>  
       <Chart options={options} series={series} type='bar' height={190}   />
    </div>
</div>
</>
  )
}

export default Monthly