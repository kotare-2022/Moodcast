exports.up = function (knex) {
  return knex.schema.createTable('Weather', (table) => {
    table.increments('id').primary()
    table.string('weather')
    table.string('image_name')
    table.string('song_name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Weather')
}