import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req : Request, res: any) {
  const client = await prisma.client.findMany();
  return new Response(JSON.stringify(client), {
    headers: { "content-type": "application/json" },
  });
};

export async function POST(req : Request, res: any) {
  const body = await req.json();
  const client = await prisma.client.create({ data: body });
  return new Response(JSON.stringify(client), {
    headers: { "content-type": "application/json" },
  });
}
