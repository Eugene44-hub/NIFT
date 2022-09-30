import React from 'react'
import { ILayoutProps } from '../types/types'

const DefaultLayout = ({children}:ILayoutProps):JSX.Element => {
  return (
    <section className='container  md:pl-[61px] md:pr-[57px] px-[20px]'>
      {children}
    </section>
  )
}

export default DefaultLayout