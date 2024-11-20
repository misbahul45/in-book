import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return(
    <div  className='w-full py-20 flex min-h-screen justify-center items-center'>
        <SignUp />
    </div>
  )
}