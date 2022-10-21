import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { businessProcess } from '../../types/types'

const processess: businessProcess = [
  {
    image: "",
    header: "",
    businessProcess: ""
  },
  {
    image: "",
    header: "",
    businessProcess: ""
  },
  {
    image: "",
    header: "",
    businessProcess: ""
  }]

const BusinessProcess = () => {
  return (
    <div className='bg-blue-500'>
      {/* <DefaultLayout>
        <article>
          <header className='text-center'>
            NFT Business Process
          </header>
          {processess.map((item, index) => (
            <div key={index} className={`shadow-lg py-5 px-5`}>
              <div className='w-[60px] h-[60px] bg-white'>

              </div>
              <h2 className='mt-[40px]'>Lorem, ipsum dolor.</h2>
              <p className='mt-[15px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, modi.
              </p>
            </div>
          ))}
        </article>
      </DefaultLayout> */}
    </div>
  )
}

export default BusinessProcess