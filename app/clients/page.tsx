"use client";

import NewClient from "./NewClient";
import TabClients from "./TabClients";
import { useEffect, useState } from "react";
import type { Client } from "@prisma/client";

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [chargementOk, setChargementOk] = useState(false);

  async function chargement() {
    const reponse = await fetch("/api/clients", {
      method: "GET",
    });
    const data = await reponse.json();
    setClients(data);
  }

  useEffect(() => {
    chargement();
    setChargementOk(true);
  }, []);

  return (
    <>
      <h1 className="m-10">Clients</h1>
      <div className="mx-20">
        {chargementOk ? (
          <TabClients clients={clients} />
        ) : (
          <div className="skeleton w-32 h-32"></div>
        )}
      </div>
      <NewClient />
    </>
  );
}
