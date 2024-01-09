"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export async function addClient(prevState: any, formData: FormData) {
  try {
    const client = await prisma.client.create({
      data: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    });
    revalidatePath("/clients");
    return { message: "Le client a bien été ajouté" };
  } catch (error) {
    console.log(error);
    return { message: "Y a un problème" }; // displayError(true);
  }
}
