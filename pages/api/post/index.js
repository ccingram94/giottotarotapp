import { getSession } from 'next-auth/client';
import { PrismaClient, Prisma, prisma } from '@prisma/client';

export default async function handle(req, res) {
    const prisma = new PrismaClient();
    const { card1, card2, card3, question } = req.body;
    const session = await getSession({ req });
    const result = await prisma.reading.create({
        data: {
            author: { connect: { email: session?.user?.email }}, 
            question: question,
            card1: card1,
            card2: card2,
            card3: card3,
        },
    });
    res.json(result);
}