import React, { FC, ReactElement } from 'react'
import './Layout.scss'
import Navbar from '../Navbar/Navbar'

type LayoutProps = {
  children?: ReactElement
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
