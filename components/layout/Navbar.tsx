import { NAVBAR_LINK } from '@/constans'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
    const isUserLoggedIn = false
    const Render=!isUserLoggedIn?
       <>
            <Link href={'/sign-in'} className='px-6 py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-400 transition-all duration-100'>
                <p className='text-white font-bold text-sm'>Sign In</p>
            </Link>
            <Link href={'/sign-up'}>
                <Button variant={'outline'}>
                    <p className='font-bold text-sm'>Sign Up</p>
                </Button>
            </Link>
       </>
       :
       <></>
  return (
    <header className='fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4'>
        <nav className='flex gap-3 items-center bg-slate-800/70 backdrop-blur-md px-6 py-1.5 rounded-xl'>
            <Link href={'/'} className='mr-4'>
                <Image src={'/images/logo.jpg'} alt='logo' width={50} height={50} className='size-9 bg-cover rounded-full' />
            </Link>
            {NAVBAR_LINK.map((link) => (
              <Link href={link.href} key={link.id} className='px-6 py-2.5 grid place-items-center hover:bg-white hover:bg-opacity-10 rounded-lg'>
                <p className='text-white font-bold text-sm'>{link.title}</p>
              </Link>
            ))}
            <div className='px-4 flex justify-center items-center gap-3'>
                {Render}
            </div>
        </nav>
    </header>
  )
}

export default Navbar