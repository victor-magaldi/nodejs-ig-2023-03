import 'dotenv/config'
import { describe, expect, it } from 'vitest'
import { PrismaUsersRepository } from '../repositories/prisma/prisma-user-repository'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'

describe('Register Use Case', () => {
  it('shoud hash user upon registration', async () => {
    const usersRepository = new PrismaUsersRepository()
    const registerUserCase = new RegisterUseCase(usersRepository)

    const { user } = await registerUserCase.execute({
      email: 'victor10087121016@teste.com',
      name: 'Victor',
      password: '12345678',
    })
    const isPasswordCorrectlyHashed = await compare(
      '12345678',
      user.password_hash,
    )
    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
