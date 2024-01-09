"use client";

import { PrismaClient } from "@prisma/client";
import RowClient from "./RowClient";
import type { Client } from "@prisma/client";
 
const prisma = new PrismaClient();

export default function TabClients(props: {clients:Client[]}) {

  return (
    <div className="overflow-x-auto">
      <table className="table text-primary">
        {/* head */}
        <thead className="text-accent">
          <tr>
            <th></th>
            <th>Nom</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {/* avec typage : clients.map((c:Client)=>...) */}
          {props.clients.map((c) => (
            <RowClient key={c.id} client={c}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
