import 'dotenv/config'
import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'

describe('Register Use Case', () => {
  it('shoud hash user upon registration', async () => {
    const registerUserCase = new RegisterUseCase({
      async create(data) {
        return {
          name: data.name,
          id: 'id',
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        }
      },
      async findByEmail() {
        return null
      },
    })

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
