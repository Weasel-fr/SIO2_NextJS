"use client";

import { PrismaClient } from "@prisma/client";
import type { Client } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

export default function NewClient(props: { newClient: Function }) {
  const [displayToast, setDisplayToast] = useState(false);
  const [messageToast, setMessageToast] = useState("");

  async function addClient(formData: FormData) {
    // appel de l'api pour mettre le nouveau client en base
    const response = await fetch("/api/clients", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (response.status === 200) {
      const client: Client = await response.json();
      props.newClient(client);
      setMessageToast("Nouveau client ajouté");
      setDisplayToast(true);
      setTimeout(() => {
        setDisplayToast(false);
      }, 2000);
    }
    else {
      setMessageToast("Erreur lors de l'ajout du client");
      setDisplayToast(true);
      setTimeout(() => {
        setDisplayToast(false);
      }, 2000);
    }

  }

  return (
    <>
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
      {displayToast && (
        <div className="toast">
          <div className="alert alert-info">
            <span>{messageToast}</span>
          </div>
        </div>
      )}
    </>
  );
}
