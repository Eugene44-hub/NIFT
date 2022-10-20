import React from 'react'
import styles from "./DigitalProducts.module.scss";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Image from 'next/future/image';
import { nft1 } from '../../public';

const DigitalProduct = () => {
  return (
    <figure
      className='p-2 pb-[16px] max-w-[306px] my-5 hover:scale-[1.05] transition-all rounded-lg m-auto border border-[#CDD6D7] '
    >

      <div className='h-[382px] flex  relative sm:w-[282px] w-full'>
        <Image src={nft1}
          className="rounded-lg h-full w-full" alt="nft"
        />

        <p className={`text-[#F94025] font-[600] bg-white py-1 px-[25px] top-[3%] left-[5%] absolute rounded-lg`}>
          Art
        </p>

        <div className='absolute text-[#747681] bottom-0 flex left-[50%] translate-x-[-50%] translate-y-[50%] bg-white py-2  rounded-lg shadow-lg px-3'>
          <p><span className={styles.days}>12</span>days</p>
          <p className={`mx-5`}> <span className={styles.hrs}>7</span>hrs</p>
          <p><span className={styles.mins}>30</span>secs</p>
        </div>

      </div>
      <figcaption className='mt-[38px]'>
        <h2 className={styles.productTitle}>
          The Rusty Robots
        </h2>

        <p className={styles.highestBid}>
          Highest bid
        </p>

        <div className='flex justify-between'>
          <p className={styles.bid}>1.05 ETH</p>
          <div className='flex'>
            <AiFillHeart className='mr-1' size={20} color="#F94025" />
            <p className={styles.likes}>400</p>
          </div>
        </div>

      </figcaption>
    </figure>
  )
}

export default DigitalProduct