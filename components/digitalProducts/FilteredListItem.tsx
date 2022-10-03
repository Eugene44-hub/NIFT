import React from 'react'
import { IFilteredListItem } from '../../types/types'
import styles from "./DigitalProducts.module.scss"
const FilteredListItem = ({ icon, item }: IFilteredListItem): JSX.Element => {
  return (
    <li className={` my-5 border border-[#CDD6D7] hover:border-0 hover:shadow-2xl transition-all duration-[.5s] rounded-lg ${styles.filteredListItem}`}>
      <button className='p-5 w-full items-center flex h-full text-left'>
        {icon}
        <p className='ml-5'>
        {item}
        </p>
      </button>
    </li>
  )
}

export default FilteredListItem