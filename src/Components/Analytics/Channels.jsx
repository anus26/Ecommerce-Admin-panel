import React from 'react'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { IoMdArrowForward } from "react-icons/io";
const Channels = () => {
  return (
<>
<section>
    <div className='Channels'>
        <div className='border border-gray rounded-lg m-5  w-[30%] text-left bg-white '>
           <div className='m-5 '>
            <h1  className='font-semibold text-lg'>Top Channels</h1>
            
            <table className="min-w-full text-left border-collapse">
  <thead className=" ">
    <tr>
      <th className="text-textt">Source</th>
      <th className="text-textt">Visitors</th>
    </tr>
  </thead>

  <tbody className="text-textt">
    <tr className="border-b border-gray transition">
      <td className="px-6 py-3">Google</td>
      <td className="px-6 py-3">4.7k</td>
    </tr>
    <tr className="border-b border-gray transition">
      <td className="px-6 py-3">Instagram</td>
      <td className="px-6 py-3">3.2k</td>
    </tr>
    <tr className="border-b border-gray transition">
      <td className="px-6 py-3">Facebook</td>
      <td className="px-6 py-3">2.8k</td>
    </tr>
    <tr className="border-gray border-b transition">
      <td className="px-6 py-3">Twitter</td>
      <td className="px-6 py-3">1.5k</td>
    </tr>
  </tbody>
</table>
<button className='border bg-white font-bold hover:bg-gray rounded-lg text-textt  border-gray duration-300 transition-all w-64 h-12 flex m-5 p-2 text-center  justify-center items-center'>
    Channels Report <span><IoMdArrowForward className='w-10 text-xl ' /></span>
</button>

            </div>
           </div>
     
        </div>
    
</section>
</>
  )
}

export default Channels