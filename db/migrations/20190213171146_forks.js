exports.up = async function (knex, Promise) {
  try {
    return knex.schema.table('reports', t => {
      t.uuid('forked_from')
      t.foreign('forked_from').references('reports.id')
    })
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  return knex.schema.table('reports', t => {
    t.dropForeign('forked_from')
    t.dropColumn('forked_from')
  })
}
