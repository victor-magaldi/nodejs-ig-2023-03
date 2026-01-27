import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { UserAlreadyExistsError } from '@/src/use-cases/errors/user-already-exists-error.ts'
import { makeRegisterUseCase } from '@/src/use-cases/factories/make-register-use-case'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerSchema.parse(request.body)

  try {
    const registerUserCase = makeRegisterUseCase()
    await registerUserCase.execute({ name, email, password })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ error: error.message })
    }
    throw error
  }

  return reply.status(201).send()
}
