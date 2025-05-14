import React from 'react'
import Image from 'next/image';
import { GoQuestion } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";



function Navbar() {
    return (
        <div className='bg-[#003b95] text-white font-bold pt-5'>
            <div className='flex justify-between items-center px-4 md:px-4'>
                <h1 className='text-xl'>Booking.com</h1>

                {/* display on medium screen upward */}
                <div className='w-[520px] hidden lg:flex gap-2 justify-between items-center'>
                    <h1 className='p-3 hover:bg-[#2551837e] cursor-pointer hover:rounded'>NGN</h1>
                    <div className='p-3 hover:bg-[#2551837e] cursor-pointer hover:rounded'>

                        <div className="relative w-6 h-6 ">
                            <Image
                                src="/images/UsaFlag.png"
                                alt="Company Logo"
                                fill
                                className="object-cover rounded-3xl "
                            />
                        </div>
                    </div>
                    <div className='p-3 hover:bg-[#2551837e] cursor-pointer hover:rounded'>
                        <GoQuestion className='text-2xl ' />
                    </div>
                    <h1 className='p-3 hover:bg-[#2551837e] cursor-pointer hover:rounded'>List your property</h1>
                    <button className='cursor-pointer p-2 rounded bg-white text-blue-500 hover:bg-gray-50'>Register</button>
                    <button className='cursor-pointer p-2 rounded bg-white text-blue-500 hover:bg-gray-50'>Sign in</button>
                </div>
                {/* display on small screen alone */}
                <div className='flex w-20 justify-between lg:hidden'>
                    <FaRegUserCircle className='text-3xl' />
                    <IoMdMenu className='text-3xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar