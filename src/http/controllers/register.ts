import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { RegisterUseCase } from '@/src/use-cases/register'
import { PrismaUsersRepository } from '@/src/repositories/prisma-user-repository'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerSchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)
    registerUseCase.execute({ name, email, password })
  } catch (error) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}
