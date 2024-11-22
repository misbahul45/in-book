import { getUser } from '@/actions/user-action'
import React from 'react'
import Image from 'next/image'
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import Link from 'next/link';
import { Pen } from 'lucide-react';
import { title } from 'process';
dayjs.extend(relativeTime);



interface Props {
    params: {
        id: string
    }
}

const data=[
    {
        id:1,
        title:'post',
        count:10
    },
    {
        id:2,
        title:'following',
        count:10
    },
    {
        id:3,
        title:'followers',
        count:10
    },
    {
        id:4,
        title:'likes',
        count:10
    },
    {
        id:5,
        title:'comments',
        count:10
    }
]

const page = async({params:{id}}:Props) => {

    const user=await getUser(id)

  return (
    <div className='w-full h-screen space-y-8 py-8 px-4'>
        <div className='pb-6 w-full border-b-2 border-slate-300 rounded-full flex flex-col justify-between items-center gap-4'>
            <div className='flex gap-4 items-start'>
                <div className="flex gap-4">
                    <Image src={user?.avatar || ''} alt="user" width={500} height={500} className='size-12 object-cover rounded-full' />
                    <div>
                        <p>{user?.name}</p>
                        <p className='text-slate-400'><small>{dayjs(user?.createdAt).fromNow()}</small></p>
                    </div>
                </div>
                <Link href={`/user/update`} className='p-2 bg-slate-100 hover:bg-slate-200 transition-all duration-100 rounded-full'>
                    <Pen className="size-4" />
                </Link>
            </div>
            <p className='text-slate-500'>{user?.aboutMe}</p>
            <div className='flex gap-4'>
                {data.map((item)=>(
                    <div key={item.id} className='flex gap-2 items-center px-4 py-2 bg-slate-600 text-white shadow-lg shadow-slate-600/50 rounded-lg hover:scale-105 transition-all duration-100'>
                        <p className='font-bold'>{item.count}</p> <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default page