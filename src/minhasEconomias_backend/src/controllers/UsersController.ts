import { Request, Response } from 'express'
import knex from '../database/connection'

export default class StudentController {
  public async create (req: Request, res: Response) {
    const { name, lastname, email, password } = req.body

    const student = {
      name,
      lastname,
      email,
      password
    }

    const findEmail = await knex('users').where('email', email).select()

    if (findEmail.length > 0) {
      return res.status(400).json({ error: 'Email already registered' })
    }

    const studentResponse = await knex('students').insert(student)

    let id

    if (studentResponse.length > 0) {
      id = studentResponse[0]
    }

    return res.json({ id, ...student })
  }

  public async show (req: Request, res: Response) {
    const { id } = req.params

    const student = await knex('users').where('id', id).select().first()

    return res.json(student)
  }
}
