import React from 'react'
import { IProcess } from '../../types/types'
import styles from './BusinessProcess.module.scss'
const Process = ({ image, header, businessProcess }: IProcess) => {
  return (
    <div className={`${styles.card}  xl:my-0 my-5 shadow-lg max-w-[306px] md:mx-0 mx-auto py-5 px-5`}>
      <div className='w-[60px] flex items-center justify-center h-[60px] rounded-full bg-white'>
        {image}
      </div>
      <h2 className='mt-[40px]'>{header}</h2>
      <p className='mt-[15px]'>
        {businessProcess}
      </p>
    </div>)
}

export default Process