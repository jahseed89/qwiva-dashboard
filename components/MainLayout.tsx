import React, { ReactNode } from 'react'

export interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children }) => {
  return (
    <div>{children}</div>
  )
}

export default MainLayout