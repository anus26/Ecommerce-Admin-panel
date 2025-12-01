import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { SlSocialFacebook } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
const Profile1 = () => {
    const {user}=useContext(AppContext)
const items=[<SlSocialFacebook />,<FaLinkedinIn />,<FaInstagram />,<FaXTwitter />]

  return (
    <>
    <section>
    <div className="profile1 m-3">
  <h1 className="text-xl font-semibold">Profile</h1>
{/* name */}
  <div className="bg-white border border-gray rounded-xl mt-5">
    <h1 className="text-lg font-semibold m-5">Profile</h1>

    <div className="border border-gray bg-white rounded-xl m-5 p-5">
      <div className="flex justify-between items-center">

        {/* Left Side: User Image + Name */}
        <div className="flex items-center gap-4">
          <img
            src={user.imageUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <h1 className="font-semibold text-xl">
            {user.firstname} {user.lastname}
          </h1>
        </div>

        {/* Right Side: Icons + Edit */}
        {user ? (
          <div className="flex gap-4 items-center">

            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-full border border-gray p-3 text-xl cursor-pointer transition-all duration-300 hover:bg-gray1"
              >
                {item}
              </div>
            ))}

            {/* Edit Button */}
            <div className="flex items-center gap-2 rounded-full border border-gray p-3 cursor-pointer transition-all duration-300 hover:bg-gray1">
              <GoPencil />
              <span className="text-md font-medium">Edit</span>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
{/* personal information */}
<div className="bg-white border border-gray rounded-xl mt-5  m-5" >
    <div className='flex justify-between m-5'>

    <h1 className='font-semibold text-xl font-poppins'>Personal Information</h1>
              <div className="flex items-center gap-2 rounded-full border border-gray p-3 cursor-pointer transition-all duration-300 hover:bg-gray1">
              <GoPencil />
              <span className="text-md font-medium">Edit</span>
            </div>
    </div >
    {/* 1 */}
 <div className="grid grid-cols-1">

  {/* Row 1 - First & Last Name */}
  <div className="m-5 flex gap-28">
    <div>
      <p className="text-gray-500 text-sm">First Name</p>
      <p className="font-semibold text-black">{user.firstname}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Last Name</p>
      <p className="font-semibold text-black">{user.lastname}</p>
    </div>
  </div>

  {/* Row 2 - Email & Phone */}
  <div className="m-5 flex gap-10">
    <div>
      <p className="text-gray-500 text-sm">Email Address</p>
      <p className="font-semibold text-black">{user.email}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Phone</p>
      <p className="font-semibold text-black">{user.Telephone}</p>
    </div>
  </div>

  {/* Row 3 - Bio */}
  <div className="m-5">
    <div>
      <p className="text-gray-500 text-sm">Bio</p>
      <p className="font-semibold text-black">{user.position}</p>
    </div>
  </div>

</div>



</div>
{/* Address */}
<div className="bg-white border border-gray rounded-xl mt-5  m-5" >
    <div className='flex justify-between m-5'>

    <h1 className='font-semibold text-xl font-poppins'>Address</h1>
              <div className="flex items-center gap-2 rounded-full border border-gray p-3 cursor-pointer transition-all duration-300 hover:bg-gray1">
              <GoPencil />
              <span className="text-md font-medium">Edit</span>
            </div>
    </div >
    {/* 1 */}
 <div className="grid grid-cols-1">

  {/* Row 1 - First & Last Name */}
  <div className="m-5 flex gap-10">
    <div>
      <p className="text-gray-500 text-sm">Country</p>
      <p className="font-semibold text-black">{user.Country}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">City/State</p>
      <p className="font-semibold text-black">{user.City}</p>
    </div>
  </div>

  {/* Row 2 - Email & Phone */}
  <div className="m-5 flex gap-10">
    <div>
      <p className="text-gray-500 text-sm">Postal Code </p>
      <p className="font-semibold text-black">{user.Postcode}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Tax Id</p>
      <p className="font-semibold text-black">{user._id}</p>
    </div>
  </div>


</div>



</div>
  </div>
</div>

    </section>
    </>
  )
}

export default Profile1