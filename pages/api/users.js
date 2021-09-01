// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const users = await prisma.user.findMany()
  res.json(users)
}
