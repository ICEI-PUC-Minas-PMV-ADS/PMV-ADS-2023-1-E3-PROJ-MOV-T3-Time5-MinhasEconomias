import { Request, Response } from 'express'
import knex from '../database/connection'

export default class MovementsController {
  public async create (req: Request, res: Response) {
    const { description, value, date, movementType, idUser, active } = req.body

    const movement = {
      description,
      value,
      date,
      movementType,
      idUser,
      active
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

    const movements = await knex('movements').where({
      idUser,
      active: true
    }).select()

    const { despesa, receita } = movements.reduce((acc, item) => {
      if (item.movementType === 'Despesa') {
        acc.despesa += item.value
      } else if (item.movementType === 'Receita') {
        acc.receita += item.value
      }
      return acc
    }, { despesa: 0, receita: 0 })

    const amount = (receita - despesa).toFixed(2)
    return res.json({ amount, movements })
  }

  public async edit (req: Request, res: Response) {
    const { id } = req.params

    const { description, value, date, movementType, idUser, active } = req.body

    const movement = await knex('movements').where('id', id).select().first()

    const movementUpdate = {
      description: description !== '' ? description : movement.description,
      value: value !== '' ? value : movement.value,
      date: date !== '' ? date : movement.date,
      movementType: movementType !== '' ? movementType : movement.movementType,
      idUser: idUser !== '' ? idUser : movement.idUser,
      active: active !== '' ? active : movement.active
    }

    await knex('movements').where('id', id).update(movementUpdate)

    return res.json({ id, ...movement })
  }

  public async delete (req: Request, res: Response) {
    const { id } = req.params

    const movement = await knex('movements').where('id', id).select().first()

    await knex('movements').where('id', id).update('active', false)

    return res.json(movement)
  }
}
