import React, { useContext } from 'react'
import {IoMdLogOut }  from "react-icons/io";
import { AppContext } from '../../Context/AppContext';
import { IoIosArrowDown } from "react-icons/io";
const Profile = () => {
const {logout,user}=useContext(AppContext)

    const Profile=()=>{
        localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null
    }

  return (
<>
<section className='profile'>
    <div className='profile'>
        <button>
{/* <IoIosArrowDown /> */}
        </button>
           <button className='bg-white border flex items-center  justify-center gap-1 text-lg font-semibold border-gray transition-all duration-300 hover:bg-gray1 rounded-lg p-2 text-textt' onClick={logout}><span>< IoMdLogOut className='font-bold text-2xl' /></span>Logout</button>

    </div>
</section>
</>
  )
}

export default Profile