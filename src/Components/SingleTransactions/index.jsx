import React from 'react'

const SingleTransactions = () => {
  return (
<section>
    <div className='m-5'>
        <div>
            <h1 className='font-semibold text-2xl'>
            Transactions Details
            </h1>
            <div className='border border-gray rounded-xl bg-white flex justify-between  '>
              <div className='m-5 flex items-center '>

              <h1 className='font-semibold text-lg'>Order ID:{} <span className='text-green  bg-dark p-1.5 text-sm rounded-full gap-2'>Completed</span></h1>
  <div className="border-r border-gray2 h-6 mx-4"></div>
  <h1 className='text-textt font-semibold'>Due date:{}</h1>
              </div>
              <div className='m-5 flex gap-3'>
                          <button type="submit" className="border outline-none bg-primary text-white hover:bg-hower border-gray transition-all duration-300 rounded-xl w-32 h-12 ">View Receipt</button>
                                    <button type="submit" className="border outline-none bg-white text-black font-semibold hover:bg-gray1 border-gray transition-all duration-300 rounded-xl w-24 h-12 ">Refund</button>
              </div>
            </div>
            </div>
    </div>
</section>
  )
}

export default SingleTransactions