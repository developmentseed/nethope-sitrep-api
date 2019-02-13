exports.up = async function (knex, Promise) {
  try {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
    return knex.schema.createTable('reports', t => {
      t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
      t.uuid('doc_id').defaultTo(knex.raw('gen_random_uuid()'))
      t.jsonb('content').notNullable()
      t.string('name').notNullable()
      t.timestamp('created_at').defaultTo(knex.raw('now()'))
      t.integer('country')
      t.integer('emergency')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable('reports')
  return knex.raw('DROP EXTENSION pgcrypto;')
}
