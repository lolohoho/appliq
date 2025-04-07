"use server";

import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// Server action
export async function checkAuthStatus() {
    console.log("checkAuthStatus called");
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log("User from server:", user);

    if (!user) return { success: false };

    const existingUser = await prisma.user.findUnique({ where: { id: user.id } });
    if (!existingUser) {
        console.log("Creating new user:", user.id);
        await prisma.user.create({
            data: {
                id: user.id,
                email: user.email!,
                name: user.given_name + " " + user.family_name,
                image: user.picture,
            },
        });
    }
    return { success: true };
}