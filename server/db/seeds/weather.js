exports.seed = async function(knex) {
  await knex('Weather').del()
  await knex('Weather').insert([
    {id: 1, weather: 'Sunny', image_name: 'Sunshine',song_name: 'Mr Blue Sky'},
    {id: 1, weather: 'Rainy', image_name: 'Sunshine',song_name: 'Mr Blue Sky'},
    {id: 1, weather: 'Stormy', image_name: 'Sunshine',song_name: 'Mr Blue Sky'},
    {id: 1, weather: 'Sunny', image_name: 'Sunshine',song_name: 'Mr Blue Sky'},
    {id: 1, weather: 'Sunny', image_name: 'Sunshine',song_name: 'Mr Blue Sky'},
    {id: 1, weather: 'Sunny', image_name: 'Sunshine',song_name: 'Mr Blue Sky'},
    {id: 1, weather: 'Sunny', image_name: 'Sunshine',song_name: 'Mr Blue Sky'}

  ])
}