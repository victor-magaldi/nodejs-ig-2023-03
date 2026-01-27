import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import 'dotenv/config'
import { z, ZodError } from 'zod'

import { env } from '@/env'

import { userRoutes } from './http/controllers/users/routes'
import { gymsRoutes } from './http/controllers/gyms/routes'
import { checkInsRoutes } from './http/controllers/check-ins/routes'

export const app = fastify()

app.register(userRoutes)
app.register(gymsRoutes)
app.register(checkInsRoutes)

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: z.treeifyError(error) })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
