import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import styles from "./TopCollection..module.scss"
import {AiFillCheckCircle} from "react-icons/ai"
const TopCollection = () => {
  return (
    <DefaultLayout>
      <div>
      <header className='flex justify-between mt-[80px] md:mt-[120px]'>
        <h1 className={`${styles.h1} md:text-5xl text-2xl font-black`}>
        Top Collection
        </h1>
        <h2 className={`${styles.h2} md:text-4xl font-black`}>
          Last 1 Day
        </h2>
      </header>
      <ul className={`font-bold sm:flex justify-between gap-5 flex-wrap ${styles.collectionList}`}>
        {Array(16).fill(null).map((item,index)=>(
        <li key={index} className="md:max-w-[270px] sm:w-[50%] items-center md:text-2xl flex gap-5 mt-[48px]">
         <span className=''>
         {index<9?`0${index+1}`:index+1}
          </span>
          <div className='bg-gray-400 h-[56px] w-[56px] rounded-full relative'>
            <div className={`${styles.marked} absolute bottom-0 right-0`}>
            <AiFillCheckCircle size={20} color="#00FF66"/>
            </div>
            </div> 
            <div>
              <p className=''>
                Jacob Jones
              </p>
              <p className='text-gray-500 md:text-xl'>
                $219.78
              </p>
            </div>
        </li>
        ))}
      </ul>
      </div>  
    </DefaultLayout>
  )
}

export default TopCollection