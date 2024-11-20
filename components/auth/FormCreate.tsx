'use client'
import React, { useEffect } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { LoaderIcon } from 'lucide-react'
import ImageProfile from './ImageProfile'
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from '@/schema/user-schema'
import { creatingUser } from '@/actions/user-action'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useLayoutStore } from '../layout/LayoutProvider'
import { sleep } from '@/lib/utils'


interface FormCreateProps {
    idUser: string
    action: string
}

const FormCreate = ({ idUser, action }: FormCreateProps) => {
    const { setUser, user }=useLayoutStore((state) => state)
    const router=useRouter()
    const [avater, setAvater] = React.useState('')

    const form=useForm({
        resolver: zodResolver(UserSchema.Schema.CreateUserSchema),
        defaultValues: {
            name: '',
            aboutMe: '',
            avatar: '',
        },
    })

    if(!idUser){
        toast.error("User not found")
        router.push('/sign-in')
    }

    useEffect(() => {
        if (user) {
            form.setValue('name', user.name)
            form.setValue('aboutMe', user.aboutMe || '')
            form.setValue('avatar', user.avatar)
            setAvater(user.avatar)
        }
    }, [user, form])


    useEffect(() => {
        if (avater) {
            form.setValue('avatar', avater)
        }
    }, [avater, form])

    const onSubmit = async(data: Partial<UserSchema.CreateUserSchema>) => {
        try {
            sleep(1000)
            const res=await creatingUser({
                name:data.name || '',
                aboutMe:data.aboutMe,
                avatar:data.avatar || '',
                id:idUser
            })
            console.log(res)
            if(!res){
                toast.error("Server Error")
                return;
            }
            toast.success("Success")
            router.push('/')
            setUser(res as UserSchema.User)
        } catch (error) {
            toast.error("Server Error"+error)
        }
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto space-y-4">
            <ImageProfile image={avater} setImage={setAvater} />
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="aboutMe"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>About me</FormLabel>
                    <FormControl>
                        <Textarea className='min-h-[100px]' placeholder="explanation about your self, and your interest" {...field} />
                    </FormControl>
                    <FormDescription>This explanation will be shown on your profile</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <Button type='submit' disabled={form.formState.isSubmitting} className='w-full flex justify-center items-center font-semibold text-white'>
                {action==='create'?(
                        form.formState.isSubmitting?
                        <>
                            <LoaderIcon className='w-6 h-6 animate-spin text-white' />
                            <p>Creating....</p>
                        </>
                        :
                        "Create Account"
                    )
                    :
                    (
                        form.formState.isSubmitting?
                        <>
                            <LoaderIcon className='w-6 h-6 animate-spin text-white' />
                            <p>Updating....</p>
                        </>
                        :
                        "Update Account"
                    )
                }
            </Button>
        </form>
    </Form>
  )
}

export default FormCreate