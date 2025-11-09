import React, { useState } from 'react'
import Chart from "react-apexcharts";
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import { PiDotsThreeVertical } from "react-icons/pi";
dayjs.extend(quarterOfYear)
const Analyticsgraph = () => {
     const [selected,setSelected]=useState(null)
    const [open,setOpen]=useState(false)
    const [open1,setOpen1]=useState(false)
      const [open2,setOpen2]=useState(false)
        const [open3,setOpen3]=useState(false)
          const [open4,setOpen4]=useState(false)
  const handle=()=>{
    setSelected("12month")
    setOpen1(prev=>prev)
     
  }
  const handle1=()=>{
      setSelected("30days")
       setOpen2(prev=>prev)
  }
  const handle2=()=>{
     setSelected("7days")
      setOpen3(prev=>prev)
  }
  const handle3=()=>{
    setSelected("24hours")
     setOpen4(prev=>prev)
  }
    const menuItems=[
    {id:'Viewmore'},
    {id:'Delete'}
  ]

const   options = {
          chart: {
          type: 'bar',
          height: 300,
          toolbar:{show:false}
        },
 responsive: [
    {
      breakpoint: 1280,
      options: { chart: { width: 800 } }
    },
    {
      breakpoint: 1024,
      options: { chart: { width: 700 } }
    },
    {
      breakpoint: 768,
      options: { chart: { width: 500 } }
    },
    {
      breakpoint: 300,
      options: { chart: { width: 350 } }
    }
  ],

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
                        fontSize: '12px',
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
          },{
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
          },  {
            x: '2020/10/01',
            y: 690
          }]
        }]

      
      
      
    
  return (
<>
<div className='bg-white rounded-lg border border-gray m-5'>
    <div className='flex justify-between m-5  '>
<h1 className='font-semibold text-xl'>Monthly Sales</h1>
<div className='flex border-gray border bg-gray gap-5 h-12 rounded-lg w-[28%] items-center text-center justify-center'>
  <button className={`bg-gray rounded-md w-[52%] h-11  hover:text-black text-textt font-semibold ${selected==='12month' ?'bg-white border border-gray ':""} `} onClick={handle}>
    12months
  </button>
   <button className={`bg-gray rounded-md  w-[40%] h-11 hover:text-black text-textt font-semibold ${selected==='30days' ?'bg-white border border-gray ':""} `} onClick={handle1}>
    30days
  </button>
   <button className={`bg-gray rounded=md w-[40%] h-11 hover:text-black text-textt font-semibold ${selected==='7days' ?'bg-white border border-gray ':""} `} onClick={handle2}>
    7days
  </button>
   <button className={`bg-gray rounded-md w-[48%] h-11 hover:text-black text-textt font-semibold ${selected==='24hours' ?'bg-white border border-gray ':""} `} onClick={handle3}>
    24hours
  </button>
</div>
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
        <div className='w-full xl:w-full sm:w-full overflow-x-auto'>  
       <Chart options={options} series={series} type='bar'  height={410}   />
    </div>
</div>
</>
  )
}

export default Analyticsgraph