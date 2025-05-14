import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


function Navbar() {
  return (
    <div className=''>
        <div className='flex justify-between items center px-4 mt-5'>
            <h1 className='text-xl'>Booking.com</h1>
            <FaRegUserCircle className='text-3xl'/>
        </div>
    </div>
  )
}

export default Navbar