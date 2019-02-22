exports.up = async function (knex, Promise) {
  try {
    await knex.schema.createTable('tags', t => {
      t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
      t.string('name').notNullable()
    })
    return knex.schema.createTable('reports_tags', t => {
      t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
      t.uuid('report_id').references('reports.id').onDelete('cascade')
      t.uuid('tag_id').references('tags.id').onDelete('cascade')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable('reports_tags')
  return knex.schema.dropTable('tags')
}
