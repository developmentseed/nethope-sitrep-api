exports.up = async function (knex, Promise) {
  try {
    await knex.raw(`
      BEGIN TRANSACTION READ WRITE;
      SET LOCAL "request.jwt.claim.email" = 'admin@developmentseed.org';
      ALTER TABLE reports ADD COLUMN author character varying(255) NOT NULL DEFAULT current_setting('request.jwt.claim.email') CHECK (author::text = current_setting('request.jwt.claim.email') AND current_setting('request.jwt.claim.email') IS NOT NULL);
      COMMIT;
    `)
  } catch (e) {
    console.error(e)
  }
}

exports.down = async function (knex, Promise) {
  return knex.schema.table('reports', t => {
    t.dropColumn('author')
  })
}
