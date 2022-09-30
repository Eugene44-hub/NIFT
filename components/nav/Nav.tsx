import Image from 'next/image'
import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Logo } from '../../public'
import styles from "./Nav.module.scss"
import {IoPersonOutline} from "react-icons/io5";
import {AiOutlineMenu} from "react-icons/ai"
const navItems = [{
  item: 'Explore'
},
{
  item: 'Stats'
}, {
  item: 'Resources'
},
{
  item: 'Community'
}]
const Nav = () => {
const [show,setShow]=React.useState<boolean>(false)

  return (
    <DefaultLayout>
      <nav className='flex relative xl:justify-start justify-between py-[32px]'>
        <figure className='sm:w-auto w-[15%]'>
          <Image
            src={Logo}
            alt="logo"
          />
        </figure>
        <input className={`${styles.searchBar} lg:max-w-[432px] sm:w-[40%] w-[60%] sm:ml-[36px]`}
          type="text"
          placeholder="Search items, collections, accounts"
        />
  {/* desktop nav */}
        <ul className='flex  sm:pl-[75px] items-center justify-between xl:w-[60%] lg:w-[40%] sm:w-[30%]'>
          {navItems.map((item, index) => (
            <li className='xl:block hidden text-white'
             key={index}
             >
             <button>{item.item}</button> 
            </li>
          ))}
          <li>
            <button className={`${styles.createBtn} lg:block hidden`}>
              Create
            </button>
          </li>
          <li className='px-2'>
            <button>
            <IoPersonOutline color='white' 
            className={styles.icon}
            />
            </button>
          </li>
          <li className='xl:hidden block'>
            <button onClick={()=>setShow(!show)}>
            <AiOutlineMenu color='white'
            className={styles.icon}
            />
            </button>
          </li>
        </ul>
        
        
        {/* mobile nav && tablet nav */}
        <ul style={{transform:`rotateY(${show?"0deg":"120deg"})`,opacity:show?1:0}} className={` text-white shadow-lg xl:hidden block  transition-all absolute w-full flex justify-between duration-700 p-3 top-[70%]`}>
        {navItems.map((item, index) => (
            <li className={`${styles.mobileNavItem}`}
             key={index}
             >
             <button>{item.item}</button> 
            </li>
          ))}
        </ul>
      </nav>
    </DefaultLayout>

  )
}

export default Nav