import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("users", function (table) {
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now()).alter();
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now()).alter();
        table.string('password').nullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("users", function (table) {
        table.timestamp('created_at').notNullable().alter();
        table.timestamp('updated_at').notNullable().alter();
        table.dropColumn('password')
    });
}

