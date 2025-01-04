import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Rate () {
  return (
    <div className='flex flex-col flexCenter mt-10'>
      <h1 className='font-bold text-[7vw]'> Putuk Truno Camp Area </h1>
      <p className='text-gray-500 px-10 lg:px-20 bg-transparent backdrop-blur-md py-2 filter'>
        We want to be on each of your journeys seeking the satisfaction of
        seeing the incorruptible beauty of nature. We can help you on an
        adventure around the world in just one app
      </p>
      <div className='w-full flex flex-col justify-start px-8  lg:px-20 mt-10'>
        <section className='flex items-center gap-4'>
          <ul className='flex items-center gap-1'>
            <Image src={'/star.svg'} alt='star' width={32} height={32}></Image>
            <Image src={'/star.svg'} alt='star' width={32} height={32}></Image>
            <Image src={'/star.svg'} alt='star' width={32} height={32}></Image>
            <Image src={'/star.svg'} alt='star' width={32} height={32}></Image>
            <Image src={'/star.svg'} alt='star' width={32} height={32}></Image>
          </ul>
          <p className='bg-transparent rounded p-2 backdrop-blur-md filter'>
            <span className='font-bold'>198k</span>{' '}
            <span>Excellent Reviews</span>
          </p>
        </section>
        <section className='mt-4  flex w-full   lg:items-center flex-col gap-2 sm:flex-row '>
          <Button
            type='button'
            title='Download App'
            icon=''
            variant='btn_green '
          ></Button>
          <Button
            type='button'
            title='How we work?'
            icon='/play.svg'
            variant='btn_white border transition-all border_green-50'
          ></Button>
        </section>
      </div>
    </div>
  )
}
