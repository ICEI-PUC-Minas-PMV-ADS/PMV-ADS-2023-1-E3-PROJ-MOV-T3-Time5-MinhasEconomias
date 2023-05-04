import { Request, Response } from 'express'
import knex from '../database/connection'

export default class MovementsController {
  public async create (req: Request, res: Response) {
    const { description, value, date, movementType, idUser } = req.body

    const movement = {
      description,
      value,
      date,
      movementType,
      idUser
    }

    const findUser = await knex('users').where('id', idUser).select().first()

    if (!findUser) {
      return res.status(404).json({ error: 'User not Found' })
    }

    const movementResponse = await knex('movements').insert(movement)

    let id

    if (movementResponse.length > 0) {
      id = movementResponse[0]
    }

    return res.json({ id, ...movementResponse })
  }

  public async show (req: Request, res: Response) {
    const { idUser } = req.params

    const movement = await knex('movements').where('idUser', idUser).select()

    return res.json(movement)
  }
}
