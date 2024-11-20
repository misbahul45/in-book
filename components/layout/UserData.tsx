'use client'
import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useLayoutStore } from './LayoutProvider'
import { useRouter } from 'next/navigation'

const UserData = () => {
    const { userId } = useAuth()
    const { fetchUser, user } = useLayoutStore((state) => state)
    const router = useRouter()
    
    useEffect(() => {
      if (userId) {
        fetchUser(userId)
      }
    }, [userId, fetchUser])
  
    useEffect(() => {
      if (userId && !user) {
        router.push('/user/create')
      }
    }, [user, userId, router])
  
    return null
  }
export default UserData
