'use client'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Menu () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className=''>
      <Image
      onClick={toggleMenu}
        src={'menu.svg'}
        alt='menu logo'
        width={32}
        height={32}
        className='inline-blog cursor-pointer lg:hidden'
      ></Image>
      <div
        className={`fixed top-0 right-0 h-full  w-64 bg-green-50 shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'  
        } transition-transform  duration-300 ease-in-out lg:hidden z-50`}
      >
      <div className="flex justify-end p-4">
      <Image
      onClick={toggleMenu}
        src={'close.svg'}
        alt='close menu'
        width={32}
        height={32}
        className='inline-blog cursor-pointer lg:hidden'
      ></Image>
      </div>
      <ul className="flex text-white flex-col  items-center justify-center space-y-6 mt-10">
      {NAV_LINKS.map(link => (
        <Link href={link.href} key={link.key} className="regular-10 text-lg cursor-pointer pb-1.5 transition-all  hover:text-gray-500">
          {link.label}
        </Link>
      ))}
      </ul>
      </div>
      {isOpen&&(
        <div className="fixed inset-0 bg-black opacity-50 lg:hidden z-40" onClick={toggleMenu}></div>
      )}
    </div>
  )
}
