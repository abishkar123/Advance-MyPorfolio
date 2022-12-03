import React from 'react'
import { Footer } from './Footer'
import { TopNav } from './TopNav'


export const Layout = ({children}) => {
  return (
    <div>
        <TopNav/>
       <div className='layout pt-3 mt-1'>{children}</div>
        <Footer/>
    </div>
  )
}
