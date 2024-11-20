'use server'

import prisma from "@/lib/prisma"

export const getUser=(id:string)=>{
    const isUserSignUp=prisma.user.findUnique({
        where:{
            id
        }
    })
    if(!isUserSignUp){
        throw new Error("User not found")
    }
    return isUserSignUp
}