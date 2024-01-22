import { VeiwersCardProps } from '@/@types'
import React from 'react'

const ViewersCard: React.FC<VeiwersCardProps> = ({children}) => {
  return (
    <div className='p-4 bg-white-100 rounded-2xl w-[80%] md:w-[60%] lg:w-[250px] mx-auto shadow-cardShadow'>
        {children}
    </div>
  )
}

export default ViewersCard