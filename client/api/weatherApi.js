import request from 'superagent'

export function getWeather() {
  return request
    .get(
      'https://api.open-meteo.com/v1/forecast?latitude=-41.2865&longitude=174.7762&daily=temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum&precipitation_unit=inch&timezone=Pacific%2FAuckland&past_days=1'
    )
    .then((res) => {
      console.log(res.body.daily)
      return res.body.daily
    })
}
export function valueWeather(props) {
  if (
    props.weather?.snowfall_sum[0] == 0 &&
    props.weather?.rain_sum[0] == 0 &&
    props.weather?.temperature_2m_max[0] > 15
  ) {
    return 'sunny'
  }
}
