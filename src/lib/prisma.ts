import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../generated/prisma/client'
import { env } from '@/env'

const connectionString = `${process.env.DATABASE_URL}`
const schema = new URL(connectionString).searchParams.get('schema') || 'public'

const adapter = new PrismaPg({ connectionString }, { schema })
const prisma = new PrismaClient({
  adapter,
  log: env.NODE_ENV === 'development' ? ['query'] : [],
})

export { prisma }
