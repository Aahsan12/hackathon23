import { CiCreditCard1, CiDeliveryTruck } from 'react-icons/ci'
import { TiTick } from 'react-icons/ti'
import React from 'react'
import { BsRecycle } from 'react-icons/bs'

const Features = () => {
  return (
   <section className='w-auto mx-20 my-28'>
    <div className='flex items-center justify-center text-xl'>
        <h1 >What makes our brand different</h1>
    </div>

    <div className='flex items-center justify-center gap-6'>
        <div className='w-[270px] h-[124px] my-8 space-y-3'>
            <CiDeliveryTruck size={40} className='mb-3'/>
            <span>Next Day as Standard</span>
            <p  className='text-sm'>Order before 3pm and get your order the next day as standard</p>
        </div>
        <div className='w-[270px] h-[124px] my-8 space-y-3'>
            <TiTick size={40} className='mb-3'/>
            <span>Made by true Artisans</span>
            <p  className='text-sm'>Handmade crafted goods made with
            real passion and craftmanship</p>
        </div>
        <div className='w-[270px] h-[124px] my-8 space-y-3'>
            <CiCreditCard1 size={40} className='mb-3'/>
            <span>Unbeatibale prices</span>
            <p  className='text-sm'>For our materials and quality you won’t find better prices anywhere</p>
        </div>
        <div className='w-[270px] h-[124px] my-8 space-y-3'>
            <BsRecycle size={40} className='mb-3'/>
            <span>Recycled packaging</span>
            <p className='text-sm'>We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>
    </div>
   </section>
  )
}

export default Features