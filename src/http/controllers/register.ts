import { prisma } from '@/src/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerSchema.parse(request.body)

  await prisma.user.create({ data: { email, name, password_hash: password } })

  return reply.status(201).send()
}
