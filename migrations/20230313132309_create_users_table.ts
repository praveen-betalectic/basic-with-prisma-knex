import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return await knex.schema
        .createTable('users', function (table) {
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
            table.string('email', 255).notNullable();
            table.timestamp('created_at').notNullable();
            table.timestamp('updated_at').notNullable();
        });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema
        .dropTable("products");
}




