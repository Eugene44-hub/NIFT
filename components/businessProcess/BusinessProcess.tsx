import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout';
import { businessProcess } from '../../types/types';
import styles from "./BusinessProcess.module.scss";
import { FiCreditCard } from 'react-icons/fi';
import { TbStack2 } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import Process from './Process';
const processess: businessProcess = [
  {
    image: <FiCreditCard color='black' size={24} />,
    header: "Set up your wallet",
    businessProcess: "Once you’ve set up your wallet of choice, connect it to MNFT  by clicking the wallet icon in the top right corner."
  },
  {
    image: <TbStack2 color='black' size={24} />,
    header: "Create collection",
    businessProcess: "Click My Collections and set up your collection. Add social links, a description, profile & banner images, & set secondary sales fee."
  },
  {
    image: <AiOutlinePlus color='black' size={24} />,
    header: "Add your NFTs",
    businessProcess: "Upload your work (image, video, audio, 3D art), add title description, & customize your NFTs with properties, stats, & unlockable content."
  },
  {
    image: <BiMenuAltLeft color='black' size={24} />,
    header: "List them for sale",
    businessProcess: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
  },
]

const BusinessProcess = () => {
  return (
    <div className={`bg-black text-white lg:mt-[120px] mt-5 py-[120px] ${styles.container}`}>
      <DefaultLayout>
        <article>
          <header className='text-center mb-[46px] md:text-4xl text-2xl'>
            NFT Business Process
          </header>
          <div className='md:flex justify-between xl:flex-nowrap flex-wrap xl:gap-5 gap-5'>
            {processess.map((item, index) => (
              <Process key={index} {...item} />
            ))}
          </div>
        </article>
      </DefaultLayout>
    </div>
  )
}

export default BusinessProcess