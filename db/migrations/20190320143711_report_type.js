exports.up = async function (knex, Promise) {
  try {
    return knex.schema.table('reports', t => {
      t.string('report_type').notNullable().defaultTo('Analysis')
      t.string('disaster_type').notNullable().defaultTo('Other')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  return knex.schema.table('reports', t => {
    t.dropColumn('disaster_type')
    t.dropColumn('report_type')
  })
}
