import request from '@/utils/request'
// 根据定位获取城市编码
export function getCityCodeByGps(params) {
  return request({
    url: '/v0/city_code/geo',
    params
  })
}
// 根据城市名获取城市编码
export function getCityCodeByCityName(params) {
  return request({
    url: '/v0/city_code/name',
    params
  })
}
// 查询经销商
export function searchDealer(params) {
  return request({
    url: '/v0/my_dealer/mine',
    params
  })
}
// 新闻查询
export function searchNews(params) {
  return request({
    url: '/v0/news/category',
    params
  })
}
// 违章查询
export function searchPeccancy(params) {
  return request({
    url: '/v0/peccancy/violations',
    params
  })
}
// 查询驾驶信息
export function searchDrive(params) {
  return request({
    url: '/v0/smartdrive/status',
    params
  })
}
// 空气质量
export function getWeatherAir(params) {
  return request({
    url: '/v0/weather/air',
    params
  })
}
// 天气告警
export function getWeatherAlarm(params) {
  return request({
    url: '/v0/weather/alarm',
    params
  })
}
// 天气预报
export function getWeatherForecast(params) {
  return request({
    url: '/v0/weather/forecast',
    params
  })
}
// 根据定位获取所在位置信息
export function getLocation(params) {
  return request({
    url: '/v0/weather/geo_location',
    params
  })
}
// 24小时天气预告
export function getWeather24h(params) {
  return request({
    url: '/v0/weather/hour_24h',
    params
  })
}
// 3小时天气预告
export function getWeather3h(params) {
  return request({
    url: '/v0/weather/hour_3h',
    params
  })
}
// 天气指数
export function getWeatherIndex(params) {
  return request({
    url: '/v0/weather/index',
    params
  })
}
// 天气实况
export function getWeatherObserve(params) {
  return request({
    url: '/v0/weather/observe',
    params
  })
}
// 历史天气
export function getWeatherHistory(params) {
  return request({
    url: '/v0/weather/past_weather',
    params
  })
}