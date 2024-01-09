"use client";

import { PrismaClient } from "@prisma/client";
import { json } from "stream/consumers";

const prisma = new PrismaClient();

async function addClient(formData: FormData) {
    const response = await fetch("/api/clients", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      });
    console.log(response);
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