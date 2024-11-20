import { getUser } from '@/actions/user-action'
import FormCreate from '@/components/auth/FormCreate'
import { TAGS_INBOOK } from '@/constans'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

interface Props{
    params:{action:string}
}

const page = async({params:{action}}:Props) => {
    const {userId}=await auth()
    const user=await getUser(userId as string)
    if(user?.id && action==='create'){
        return redirect('/');
    }
  return (
    <div className='flex md:flex-row flex-col w-full min-h-screen'>
        <div className='flex-1 py-10 bg-slate-700 flex px-4 flex-col items-center justify-center space-y-4'>
            <h1 className='lg:text-7xl sm:text-6xl text-3xl font-bold text-white'>In♾️Booku</h1>
            <div className='p-4 w-full max-w-2xl flex justify-center items-center flex-wrap bg-white/10 backdrop-blur-xl rounded-lg shadow-xl border-2 border-slate-400 gap-2'>
                {TAGS_INBOOK.map((tag)=>(
                    <div key={tag.id} className='bg-gradient-to-r from-slate-700 md:text-sm text-xs to-gray-800 px-2 py-1 rounded-lg text-white'>{tag.tag}</div>
                ))}
            </div>
        </div>
        <div className="flex-1 pt-8 pb-4 bg-white flex flex-col gap-4 justify-center items-center px-4">
            <h1 className='lg:text-3xl sm:text-2xl text-xl font-bold'>{action==='create' ? 'Create' : 'Update'} <span className='px-4 py-2 bg-blue-600 text-white shadow-lg rounded-lg'>Acccount</span> 🚀</h1>
            <FormCreate idUser={userId || ''} action={action} />
        </div>
    </div>
  )
}

export default page