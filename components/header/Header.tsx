import Image from 'next/image'
import React from 'react'
import './header.scss'
import {HiOutlineCloudDownload} from "react-icons/hi"
import { TfiMenu } from "react-icons/tfi";

const Header = () => {

  return (
    <div className='flex justify-between items-center py-4 bg-white-100 h-20 px-3'>
      <h2 className='lg:hidden text-blue-100 text-2xl'><TfiMenu /></h2>
      <h2 className='font-bold text-xl hidden lg:block'>Dashboard</h2>
      <div className='w-[80%] md:w-[40%] lg:w-[20%] flex justify-between items-center'>
        <button className='flex justify-between items-center text-sm py-2 rounded w-[40%] px-3 text-black download-btn'>
          {/* <span className='pr-1 text-black'><Image src='/download.svg' width={50} height={50} alt='download' /></span> */}
          <span className='pr-1 text-black'><HiOutlineCloudDownload /></span>
          <span>Download</span>
        </button>
        <button className='bg-blue-100 flex justify-around items-center text-sm text-white-100 py-1 rounded w-[40%] px-3'>
          <span className='text-xl'>+</span>
          <span>Create</span>
        </button>
      </div>
    </div>
  )
}

export default Header