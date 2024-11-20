'use client'
import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { LoaderIcon } from 'lucide-react'

const FormCreate = () => {
    const [loading, setLoading] = React.useState(false)
    const form=useForm()

  return (
    <Form {...form}>
        <form className="w-full space-y-4">
            <FormField
                control={form.control}
                name="username"
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
                name="username"
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
            <Button className='w-full flex justify-center items-center font-semibold text-white'>
                {loading?
                    <>
                        <LoaderIcon className='w-6 h-6 animate-spin' />
                        <p>Creating....</p>
                    </>
                    :
                    "Create Account"
                }
            </Button>
        </form>
    </Form>
  )
}

export default FormCreate