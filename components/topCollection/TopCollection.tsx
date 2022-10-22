import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import Collection from './Collection'
import styles from "./TopCollection..module.scss"
const TopCollection = () => {
  return (
    <DefaultLayout>
      <div className='relative'>
        <header className='flex  justify-between mt-[80px] md:mt-[120px]'>
          <h1 className={`${styles.h1} md:text-5xl text-2xl font-black`}>
            Top Collection
          </h1>
          <h2 className={`${styles.h2} md:text-4xl font-black`}>
            Last 1 Day
          </h2>
        </header>
        <ul className={`font-bold sm:flex justify-between gap-5 flex-wrap ${styles.collectionList}`}>
          {Array(16).fill(null).map((item, index) => (
            <Collection key={index} index={index} />
          ))}
        </ul>
      </div>
    </DefaultLayout>
  )
}

export default TopCollection