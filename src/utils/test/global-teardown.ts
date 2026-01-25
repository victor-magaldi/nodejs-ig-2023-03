import { prisma } from '@/src/lib/prisma'

export const teardown = async () => {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error('This script can only run in test environment')
  }

  // pega todas as "keys" que são models do prisma
  const modelKeys = Object.keys(prisma).filter((key) => {
    return !key.startsWith('_') && !key.startsWith('$')
  })
  console.log('🚀 ~ teardown ~ modelKeys:', modelKeys)

  for (const model of modelKeys) {
    try {
      console.log('🚀 ~ teardown ~ model:', model)
      // await prisma[model].deleteMany()
    } catch (error) {
      console.log('err', error)
    }
  }
  await prisma.$disconnect()
}
teardown()
