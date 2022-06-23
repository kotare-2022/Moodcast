exports.seed = async function(knex) {
  await knex('Weather').del()
  await knex('Weather').insert([
    {id: 1, forecast: 'Sunny', image_id: '1',music_id: '1'}
  ])
}