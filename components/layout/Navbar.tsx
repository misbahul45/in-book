'use client'
import { NAVBAR_LINK } from '@/constans'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { SignOutButton } from '@clerk/nextjs'
import { useLayoutStore } from './LayoutProvider'
import User from './User'

const Navbar = () => {
    const { user, setUser } = useLayoutStore((state) => state)

    const [scroll, setScroll] = React.useState(true)
    const [lastScrollY, setLastScrollY] = React.useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY) {
                setScroll(false)  
            }else{
                setScroll(true)  
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    useEffect(() => {
        if(scroll){
            setTimeout(() => {
                setScroll(false)
            }, 2000);
        }
    }, [scroll])

    const Signout = () => {
        setUser({
            id: '',
            name: '',
            avatar: '',
        })
    }

    return (
        <header className={`fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 ${scroll ? "translate-y-0" : "-translate-y-20 hover:translate-y-0"} transition-all duration-300`}>
            <nav className='flex gap-3 items-center bg-slate-800/70 backdrop-blur-md px-6 py-1.5 rounded-xl'>
                <Link href={'/'}>
                    <Image src={'/images/logo.jpg'} alt='logo' width={50} height={50} className='size-9 bg-cover rounded-full' />
                </Link>
                {NAVBAR_LINK.map((link) => (
                    <Link href={link.href} key={link.id} className='px-6 py-2.5 grid place-items-center hover:bg-white hover:bg-opacity-10 rounded-lg'>
                        <p className='text-white font-bold text-sm'>{link.title}</p>
                    </Link>
                ))}
                <>
                    {!user?.id ? (
                        <>
                            <Link href={'/sign-in'} className='px-6 py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-400 transition-all duration-100'>
                                <p className='text-white font-bold text-sm'>Sign In</p>
                            </Link>
                            <Link href={'/sign-up'}>
                                <Button variant={'secondary'}>
                                    <p className='font-bold text-sm'>Sign Up</p>
                                </Button>
                            </Link>
                        </>
                    ) : (
                       <>
                        <User />
                        <SignOutButton>
                            <Button onClick={Signout} variant={'destructive'}>Signout</Button>
                        </SignOutButton>
                       </>
                    )}
                </>
            </nav>
        </header>
    )
}

export default Navbar
