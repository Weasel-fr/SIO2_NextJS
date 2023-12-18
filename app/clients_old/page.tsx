import type { Client } from "@prisma/client";

export default async function Clients() {
  // La fonction fetch() permet de faire des requêtes HTTP en GET sur notre API
  const query = await fetch("http://localhost:3000/api/clients", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // On récupère la réponse de l'API pour avoir les clients
  const clients = await query.json();

  console.log(clients);

  return (
    <div>
      <h1>Clients</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c: Client) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
