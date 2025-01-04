import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Menu from './Menu'
const NavBar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5 '>
      <Link href='/'>
        <Image
          src={'/hilink-logo.svg'}
          alt={'Logo'}
          width={74}
          height={29}
        ></Image>
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map(link => (
          <Link
            href={link.href}
            key={link.key}
            className='regular-10 text-gray-50 cursor-pointer pb-1.5 transition-all hover:text-gray-500'
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className='hidden lg:flexCenter '>
        <Button
          type='button'
          title='login'
          icon='/user.svg'
          variant='btn_dark_green'
        ></Button>
      </div>

      <Menu></Menu>
    </nav>
  )
}

export default NavBar
