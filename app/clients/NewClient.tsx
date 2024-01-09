import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addClient(formData: FormData) {
    "use server";
    const client = await prisma.client.create({
      data: {
        name: formData.get("name")!.toString(),
        email: formData.get("email")!.toString(),
        password: formData.get("password")!.toString(),
      },
    });
  }

export default function NewClient() {

  return (
    <form className="m-20" action={addClient}>
      <label htmlFor="name">Nom du client : </label>
      <input
        name="name"
        type="text"
        placeholder="Jean Bonbeurre"
        className="input input-bordered w-full max-w-xs"
      />
      <label htmlFor="email">Email du client : </label>
      <input
        name="email"
        type="text"
        placeholder="toto@domaine.com"
        className="input input-bordered w-full max-w-xs"
      />
      <label htmlFor="password">Password du client : </label>
      <input
        name="password"
        type="password"
        placeholder="password"
        className="input input-bordered w-full max-w-xs"
      />
      <button type="submit" className="btn btn-active">
        Ajouter
      </button>
    </form>
  );
}