import Image from "next/image"
import { useLayoutStore } from "./LayoutProvider"
import { useRouter } from "next/navigation"

const User = () => {
    const { user }=useLayoutStore((state) => state)

    const router=useRouter()

  return (
    <div onClick={() => router.push(`/user/profile/${user?.id}`)} className="cursor-pointer">
        <Image 
            src={user?.avatar}
            alt="user"
            width={40}
            height={40}
            className="rounded-full object-cover"
        />
    </div>
  )
}

export default User