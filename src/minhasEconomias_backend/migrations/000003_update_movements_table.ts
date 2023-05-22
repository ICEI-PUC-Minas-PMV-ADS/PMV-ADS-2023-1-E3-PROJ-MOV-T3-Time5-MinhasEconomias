import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('movements',  table => {
        table.boolean('active').notNullable
    }) 
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('movements', table => {
        table.dropColumn('active')
    })
}

