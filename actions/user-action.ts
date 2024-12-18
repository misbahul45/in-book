'use server'

import prisma from "@/lib/prisma"
import { UserSchema } from "@/schema/user-schema"

// Fetch user by ID
export const getUser = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id }
    })
    if (!user) {
        return null;
    }
    return user
}

export const creatingUser = async (data: UserSchema.CreateUserSchema) => {
    try {
        const existingUser = await getUser(data.id)

        if (!existingUser) {
            const newUser = await prisma.user.create({
                data: {
                    id: data.id,
                    name: data.name,
                    aboutMe: data.aboutMe || null,
                    avatar: data.avatar
                }
            })
            return newUser
        }

        const updatedUser = await prisma.user.update({
            where: { id: data.id },
            data: {
                name: data.name,
                aboutMe: data.aboutMe || null,
                avatar: data.avatar
            }
        })
        return updatedUser
    } catch (error) {
        console.error("Error creating/updating user:", error)
        throw new Error("Failed to create or update user")
    }
}
