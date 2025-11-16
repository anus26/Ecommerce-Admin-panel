import React from 'react'
import Global from '../../Global'
import Orders from '../../Orders'

const Globalandproduct = () => {
  return (
   <>
   <section>
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10'>
        <Global/>
        <Orders/>

    </div>
    
   </section>
   </>
  )
}

export default Globalandproduct