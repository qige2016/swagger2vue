import request from '@/utils/request'
export function getCityCodeByGps(params) {
  return request({
    url: '/v0/city_code/geo',
    params
  })
}
export function getCityCodeByCityName(params) {
  return request({
    url: '/v0/city_code/name',
    params
  })
}
export function searchDealer(params) {
  return request({
    url: '/v0/my_dealer/mine',
    params
  })
}
export function searchNews(params) {
  return request({
    url: '/v0/news/category',
    params
  })
}
export function searchPeccancy(params) {
  return request({
    url: '/v0/peccancy/violations',
    params
  })
}
export function searchDrive(params) {
  return request({
    url: '/v0/smartdrive/status',
    params
  })
}
export function getWeatherAir(params) {
  return request({
    url: '/v0/weather/air',
    params
  })
}
export function getWeatherAlarm(params) {
  return request({
    url: '/v0/weather/alarm',
    params
  })
}
export function getWeatherForecast(params) {
  return request({
    url: '/v0/weather/forecast',
    params
  })
}
export function getLocation(params) {
  return request({
    url: '/v0/weather/geo_location',
    params
  })
}
export function getWeather24h(params) {
  return request({
    url: '/v0/weather/hour_24h',
    params
  })
}
export function getWeather3h(params) {
  return request({
    url: '/v0/weather/hour_3h',
    params
  })
}
export function getWeatherIndex(params) {
  return request({
    url: '/v0/weather/index',
    params
  })
}
export function getWeatherObserve(params) {
  return request({
    url: '/v0/weather/observe',
    params
  })
}
export function getWeatherHistory(params) {
  return request({
    url: '/v0/weather/past_weather',
    params
  })
}