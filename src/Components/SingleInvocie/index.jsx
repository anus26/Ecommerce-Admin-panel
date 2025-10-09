import axios from 'axios'
import React, { useState } from 'react'

const SingleInvocie = () => {
    const [Data,setFormData]=useState([])
    const fetchData=async()=>{
    try {
        const res=await axios.get('')
    } catch (error) {
        
    }
    }
  return (
  <>
 <section>
    <div>
        
        <h1 className='font-semibold text-xl'>Invoice</h1>
    <div className='bg-white rounded-lg border-gray m-5'>
        <div className='m-5'>

        <div className=' flex  justify-between'>
           <h1 className='font-semibold text-xl'>Invoice</h1>
           <h1 className='font-semibold '>ID: #</h1>

        </div>
        <div className='border-b border-gray'></div>
        <div className='flex  justify-between'>
            <div>
                <h1 className='font-bold text-textt'>Form</h1>
                <h1 className='font-semibold text-lg'>Pimjolino</h1>
                <h1 className='text-textt'>streets karachi lahore saad</h1>
                <h1 className='text-textt'>Issued on: <span>11 March 2017</span></h1>
            </div>
            <div className='items-end '>
                <h1 className='font-bold text-textt '>To</h1>
                <h1 className='font-semibold text-lg'>Albert Word</h1>
                <h1 className='text-textt'>355, Shobe Lane
Colorado, Fort Collins - 80543</h1>
                <h1 className='text-textt'>Due On: <span>11 March 2017</span></h1>
            </div>
        </div>

    </div>
        <div>

        </div>
        </div>
    </div>
 </section>
  </>  
  )
}

export default SingleInvocie