import Image from 'next/future/image';
import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout';
import { IFilteredListItem, IFilteredListItems } from '../../types/types';
import styles from "./DigitalProducts.module.scss";
import FilteredListItem from './FilteredListItem';
import { AiFillHeart, AiOutlineHeart, AiOutlineCamera } from 'react-icons/ai'
import { BsStack } from 'react-icons/bs'
import { FiDollarSign, FiCreditCard } from 'react-icons/fi'
import { MdOutlinePersonOutline } from 'react-icons/md'
import DigitalProduct from './DigitalProduct';
const filteredListItems: IFilteredListItems = [{
  icon: <BsStack size={24} />,
  item: 'Recently added'
}, {
  icon: <FiDollarSign size={24} />,
  item: 'Low Price'
}, {
  icon: <FiCreditCard size={24} />,
  item: 'Price Range'
}, {
  icon: <MdOutlinePersonOutline size={24} />,
  item: 'Creators'
}, {
  icon: <AiOutlineCamera size={24} />,
  item: 'Photography'
}]


const DigitalProducts = (): JSX.Element => {
  return (
    <DefaultLayout>
      <div className=' md:mt-[126px] mt-[50px]'>
        <div className='flex flex-wrap justify-end'>

          <header className={`${styles.header}  w-full md:text-start text-center`}>
            Digital Products
          </header>

          <select name="Select category"
            className='border my-5 md:hidden outline-none px-3 h-[30px]'
          >
            {filteredListItems.map((item, index) => (
              <option key={index} value={item.item}>{item.item}</option>
            ))}
          </select>
        </div>


        <div className='flex justify-between'>
          <ul className='md:max-w-[306px] md:block hidden w-[30%]'>
            {filteredListItems.map((item: IFilteredListItem, index: number) => (
              <FilteredListItem {...item} key={index} />
            ))}
          </ul>

          <div className='md:w-[75%] flex flex-wrap '>
            {Array(6).fill(1).map((item, index) => (
              <DigitalProduct key={index} />
            ))}
          </div>

        </div>
      </div>
    </DefaultLayout>
  )
}

export default DigitalProducts