import React from 'react'
import './header.scss'
import {HiOutlineCloudDownload} from "react-icons/hi"
import { usePathname } from 'next/navigation'

const Header= () => {

  const pathName = usePathname()

  return (
    <nav className='flex justify-end lg:justify-between items-center py-4 bg-white-100 h-20 px-3'>
      <h2 className='font-bold text-xl hidden lg:block'>{pathName.split('/')[1].toUpperCase()}</h2>
      <div className='w-[80%] md:w-[40%] lg:w-[30%] flex justify-between lg:justify-end items-center'>
        <button className='flex justify-between items-center text-sm py-2 rounded w-[40%] mr-5 px-3 text-black download-btn'>
          <span className='pr-1 text-black'><HiOutlineCloudDownload /></span>
          <span>Download</span>
        </button>
        <button className='bg-blue-100 flex justify-around items-center text-sm text-white-100 py-1 rounded w-[40%] px-3'>
          <span className='text-xl'>+</span>
          <span>Create</span>
        </button>
      </div>
    </nav>
  )
}

export default Header