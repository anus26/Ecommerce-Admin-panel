import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { SlSocialFacebook } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Profile1 = () => {
    const {user}=useContext(AppContext)


  return (
    <>
    <section>
        <div className='profile1 m-3'>
            <h1 className='text-xl font-semibold'>Profile</h1>
            <div className='bg-white border border-gray rounded-xl mt-5'>
                <h1 className='text-lg font-semibold m-5 '>Profile</h1>
                {user?(
                    <div className='border border-gray bg-white rounded-xl m-5'>
                        <div className='flex justify-between m-5'>
                        <div>

                      <h1 >{user.fullname}</h1>
                        </div>
                        <div className='flex gap-4'>
                            <span className='rounded-full border border-gray transition-all duration-300 hover:bg-gray1 p-3 text-xl'><SlSocialFacebook /></span>
                            <span className='rounded-full border border-gray transition-all duration-300 hover:bg-gray1 p-3 text-xl'><FaLinkedinIn /></span>
                            <span className='rounded-full border border-gray transition-all duration-300 hover:bg-gray1 p-3 text-xl'><FaInstagram /></span>
                            <span className='rounded-full border border-gray transition-all duration-300 hover:bg-gray1 p-3 text-xl'><FaXTwitter /></span>
                        </div>
                        </div>
                    </div>
                ):(
<p></p>
                )}
            </div>

        </div>
    </section>
    </>
  )
}

export default Profile1