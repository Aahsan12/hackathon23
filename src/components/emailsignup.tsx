'use client'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
const EmailSignUp = () => {
  return (
    <section className='w-full h-[400px] bg-[#f9f9f9] flex items-center justify-center'>
        <div className='bg-white py-14 px-80' >
            <div className='flex flex-col items-center justify-center space-y-1'>
                <h1 className='text-2xl pb-7'>Join the club and get the benefits</h1>
                <p> Sign up for our newsletter and receive exclusive offers on new</p>
                    <p>ranges, sales, pop up stores and more</p>
            </div>
            <div className='flex mt-14'>
                <Input type='email' placeholder='Your@gmail.com' className='h-14'/>
                <Button className='h-14 px-8' variant={'devil'} onClick={() => alert('Sign up Successfully')}>Sign up</Button>
            </div>
        </div>
    </section>
  )
}

export default EmailSignUp