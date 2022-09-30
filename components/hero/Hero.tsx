import React from 'react'
import styles from './Hero.module.scss'
import DefaultLayout from '../../layouts/DefaultLayout'
import { nft1 } from '../../public'
import Image from 'next/image'
const topNfts = [{
  image: nft1,
  text: "Dude"
},
{
  image: nft1,
  text: "Dude"
}
]
const Hero = () => {
  return (
    <DefaultLayout>
      <div className='lg:flex lg:w-auto md:w-[80%] m-auto justify-between items-center pt-[88px] 
      pb-[114px] text-white'>

        {/* explore or create section  */}
        <article className='xl:max-w-[577px] lg:w-[40%] lg:m-0 mx-auto lg:text-start  text-center'>
          <header className={`${styles.header} `}>
            Explore, Collect, and Sell NFTs
          </header>
          <p className={`${styles.heroText} pt-[21px] pb-[52px]`}>
            {`On the world's Best & largest NFT marketplace`}
          </p>
          <button className={styles.heroBtn}>
            Explore
          </button>
          <button className={`${styles.heroBtn} ${styles.create} lg:ml-[21px] ml-3`}>
            Create
          </button>
        </article>

        {/* top nfts */}
        <figure className={`${styles.topNfts} flex gap-5 pt-[70px] lg:w-[50%] m-auto md:my-0 my-[50px]`}>
          {topNfts.map((item, index) => (
            <figcaption key={index} className={`${index==0?styles.topNft0:styles.topNft1} bg-[white]`}>
              <Image src={item.image} alt="nft" />
              <div className='flex gap-3  py-5 pl-3'>
                <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                  <Image src={nft1} alt="user"/>
                </div>
                <div>
                  <p className={`text-black ${styles.centered}`}>User centered</p>
                  <p className={`text-gray-500 ${styles.price}`}>$180.53</p>
                </div>
              </div>
            </figcaption>
          ))}
        </figure>
      </div>
    </DefaultLayout>

  )
}

export default Hero