import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
    return knex.schema.createTable('movements', table => {
      table.increments('id').primary()
      table.string('description').notNullable
      table.float('value').notNullable
      table.date('date').notNullable
      table.string('movementType').notNullable
      table.integer('idUser').notNullable
    })
  }
  
  export async function down (knex: Knex): Promise<void> {
    return knex.schema.dropTable('movements')
  }