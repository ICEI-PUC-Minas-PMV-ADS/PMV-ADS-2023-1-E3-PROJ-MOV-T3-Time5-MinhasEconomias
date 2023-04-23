import { Request, Response } from 'express'
import knex from '../database/connection'

export default class UsersController {
  public async create (req: Request, res: Response) {
    const { name, lastname, email, password } = req.body

    const user = {
      name,
      lastname,
      email,
      password
    }

    const findEmail = await knex('users').where('email', email).select()

    if (findEmail.length > 0) {
      return res.status(400).json({ error: 'Email already registered' })
    }

    const userResponse = await knex('users').insert(user)

    let id

    if (userResponse.length > 0) {
      id = userResponse[0]
    }

    return res.json({ id, ...userResponse })
  }

  public async show (req: Request, res: Response) {
    const { id } = req.params

    const user = await knex('users').where('id', id).select().first()

    return res.json(user)
  }

  public async edit (req: Request, res: Response) {
    const { id } = req.params

    const { name, lastname, password } = req.body
    console.log(password)
    const user = await knex('users').where('id', id).select().first()

    const userUpdate = {
      name: name !== '' ? name : user.name,
      lastname: lastname !== '' ? lastname : user.lastname,
      password: password !== '' ? password : user.password
    }

    await knex('users').where('id', id).update(userUpdate)

    return res.json({ id, ...user })
  }
}
