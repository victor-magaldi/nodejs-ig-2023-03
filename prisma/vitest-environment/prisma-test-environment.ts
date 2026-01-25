import 'dotenv/config'
import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import type { Environment } from 'vitest/environments'

// Importações necessárias para o seu setup específico
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../generated/prisma/client'

function generateDatabaseUrl(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL env variable')
  }

  const url = new URL(process.env.DATABASE_URL)
  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',
  async setup() {
    const schema = randomUUID()
    const databaseUrl = generateDatabaseUrl(schema)

    // 1. Atualiza a variável de ambiente global
    process.env.DATABASE_URL = databaseUrl

    // 2. Sincroniza o schema do banco usando db push (conforme Obs 2 do professor)
    // O --accept-data-loss é opcional, mas ajuda a evitar travamentos em ambiente de teste
    execSync('npx prisma db push --accept-data-loss')

    return {
      async teardown() {
        // 3. Criamos o adapter e o client aqui dentro para garantir que usem o schema UUID correto
        const adapter = new PrismaPg({ connectionString: databaseUrl })
        const prisma = new PrismaClient({ adapter })

        // 4. Deleta o schema para manter o banco limpo
        await prisma.$executeRawUnsafe(
          `DROP SCHEMA IF EXISTS "${schema}" CASCADE`,
        )

        await prisma.$disconnect()
      },
    }
  },
}