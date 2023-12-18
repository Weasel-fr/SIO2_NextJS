import { PrismaClient } from "@prisma/client";
import RowClient from "./RowClient";
// import type { Client } from "@prisma/client";
 
const prisma = new PrismaClient();

//avec type : async function getClients():Promise<Client[]> {
async function getClients() {
  const clients = await prisma.client.findMany();
  return clients;
}

export default async function TabClients() {
  const clients = await getClients();
  
  // console.log(clients);

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
          {clients.map((c) => (
            <RowClient key={c.id} client={c}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
