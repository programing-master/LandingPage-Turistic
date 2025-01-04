import { SOCIALS } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-10 mt-20'>
      <div className='w-full justify-between p-8 flex items-center '>
        <Image
          src={'/hilink-logo.svg'}
          alt={'Logo'}
          width={74}
          height={29}
        ></Image>
        <ul className='flex items-center gap-1'>
          {SOCIALS.map(item => (
            <li
              key={item.id}
              className='transition-all hover:translate-y-1 ease-in-out duration-75'
            >
              <Image
                src={item.name}
                alt={'social media icon'}
                width={30}
                height={30}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
