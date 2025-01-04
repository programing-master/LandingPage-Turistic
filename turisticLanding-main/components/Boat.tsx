import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Boat () {
  return (
    <section
      className={`bg-[url("/tienda.png")] w-full min-h-[90vh] object-fit  mt-[35vh] lg:mt-[25vh] bg-center bg-cover flex justify-between px-8 py-4`}
    >
      <div className=' flex flex-col items-start h-full  gap-4 justify-between '>
        <section className=' z-50 flex items-center gap-4 '>
          <ul className='flex items-center '>
            <Image
              src={'/person-1.png'}
              alt='person logo'
              width={32}
              height={32}
            ></Image>
            <Image
              src={'/person-2.png'}
              alt='person logo'
              width={32}
              height={32}
            ></Image>
            <Image
              src={'/person-3.png'}
              alt='person logo'
              width={32}
              height={32}
            ></Image>
            <Image
              src={'/person-4.png'}
              alt='person logo'
              width={32}
              height={32}
            ></Image>
          </ul>
          <article className='text-white font-bold'>50+ Joined</article>
        </section>
        <section className=' backdrop-blur-sm filter bg-gray-400/20  w-[100%] md:w-[70%] lg:w-[40%] p-8 rounded-lg shadow-md   flex flex-col gap-4  '>
          <h2 className='text-white text-xl  '>
            <span className='font-bold text-green-50'>Feeling Lost </span>
            <span>
              And Not <br /> Knowing The Way?{' '}
            </span>
          </h2>
          <p className='text-sm text-white'>
            Starting from the anxienty of the climbers when visit a new climbing
            location the possibility of getting lost is very large That's why we
            are here for those of you who want to start an adventure
          </p>
          <Button
            type='button'
            title='Get Started'
            icon=''
            variant='btn_green '
          ></Button>
        </section>
      </div>
    </section>
  )
}
