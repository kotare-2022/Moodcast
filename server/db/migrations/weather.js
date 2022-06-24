exports.up = function (knex) {
  return knex.schema.createTable('Weather', (table) => {
    table.increments('id').primary()
    table.string('forecast')
    table.string('image_id')
    table.string('music_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Weather')
}