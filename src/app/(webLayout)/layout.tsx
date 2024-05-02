import React from 'react'

import Link from 'next/link';
import SidebarData from '../components/NavigationData/SidebarData';
import Header from './layout/Header';
import Footer from './layout/Footer';

const MainLayout = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
      <SidebarData/>



    </div>
  )
}

export default MainLayout
