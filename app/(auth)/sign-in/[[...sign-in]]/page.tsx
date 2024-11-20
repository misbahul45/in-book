import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-full pt-16 flex min-h-screen justify-center items-center'>
        <SignIn />
    </div>
  )
}