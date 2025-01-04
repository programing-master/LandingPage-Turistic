import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function GetOnly () {
  return (
    <div className='flex w-full p-10 justify-between  h-[90vh]  bg-[url("/pattern.png")]  bg-center bg-cover  mt-[25vh] lg:mt-[35vh]'>
      <section className='text-white flex flex-col justify-evenly p-8 w-full md:w-[60%]'>
      <div>
      <h1 className='font-bold text-[7vw] md:text-[4vw] '> Get for Free now!</h1>
        <p className='text-gray-400'>Wear our app</p>
      </div>  
      
        <div className="w-full mt-10 flex flex-col gap-2">
          <Button
            type='button'
            title='Download App'
            icon=''
            variant='btn_white'
          ></Button>
          <Button
          type='button'
          title='How we work?'
          icon='/play.svg'
          variant='btn_white_text'
        ></Button>
        </div>
      </section>
      <section>
        <Image
          src={'/phones.png'}
          alt={'logo camp'}
          width={240}
          height={240}
          className='  bottom-10 z-[-50] w-[100%]   h-[100vh] hidden md:inline'
        />
      </section>
    </div>
  )
}
