import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

export default function Features () {
  return (
    <div className='flex  flex-col bg-[url("/feature-bg.png")] items-center w-full  mt-[25vh] lg:mt-[35vh]'>
      <h1 className='font-bold text-[7vw] lg:text-[4vw] w-full px-12 lg:px-20 flex justify-start'>
        Our Features
      </h1>
      <p className='text-gray-500 px-10 lg:px-20 bg-transparent backdrop-blur-md py-2 filter'>
        We want to be on each of your journeys seeking the satisfaction of
        seeing the incorruptible beauty of nature. We can help you on an
        adventure around the world in just one app
      </p>
      <section className='flex items-center justify-between'>
        <div className='w-[30%] hidden lg:inline'>
          <Image
            src={'/phone.png'}
            alt={'logo camp'}
            width={240}
            height={240}
            className='  bottom-5 z-[-50] w-[100%] lg:w-[100%] rotate-45 h-[80vh]'
          />
        </div>

        <ul className='mt-12 w-full z-50  grid p-8 grid-cols-1 md:grid-cols-2 gap-2'>
          {FEATURES.map(item => (
            <li
              key={item.id}
              className='bg-gray-300/20  rounded-md filter backdrop-blur-xl min-h-20  p-4'
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={44}
                height={44}
                className='rounded-full  bg-green-50'
              ></Image>
              <h2 className='px-8 font-bold text-[5vw] md:text-[2vw]'>
                {item.title}
              </h2>
              <p className='  px-8 py-2   text-gray-800 text-sm  flex items-center rounded-md justify-center'>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
