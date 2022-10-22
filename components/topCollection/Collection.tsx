import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai"
import styles from "./TopCollection..module.scss"

const Collection = ({ index }: { index: number }) => {
  return (
    <li key={index} className="md:max-w-[270px] sm:w-[50%] items-center md:text-2xl flex gap-5 mt-[48px]">
      <span className=''>
        {index < 9 ? `0${index + 1}` : index + 1}
      </span>
      <div className='bg-gray-400 h-[56px] w-[56px] rounded-full relative'>
        <div className={`${styles.marked} absolute bottom-0 right-0`}>
          <AiFillCheckCircle size={20} color="#00FF66" />
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
    </li>)
}

export default Collection