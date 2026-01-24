import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  console.log('🚀 ~ profile ~ request:', request.headers.authorization)
  try {
    const data = await request.jwtVerify()
    console.log('🚀 ~ profile ~ data:', data)
    reply.send({ ok: true })
  } catch (err) {
    reply.send(err)
  }
}
