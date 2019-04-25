import request from '@/utils/request'
// 查询车辆型号列表
export function searchVehicleModels(params) {
  return request({
    url: '/v0/models',
    params
  })
}
// 查询远程操作结果
export function getRemoteOperateDetail(uuid, params) {
  return request({
    url: `/v0/remote-operates/${uuid}`,
    params
  })
}
// 查询车辆
export function searchVehicles(params) {
  return request({
    url: '/v0/vehicles',
    params
  })
}
// 查询车辆的围栏报警记录
export function searchVehicleFence(params) {
  return request({
    url: '/v0/vehicles/fence',
    params
  })
}
// 查询车辆实时数据列表
export function searchVehiclesRealtime(params) {
  return request({
    url: '/v0/vehicles/realtime',
    params
  })
}
// 查询车辆的XCall记录
export function searchVehicleXCall(params) {
  return request({
    url: '/v0/vehicles/xcall',
    params
  })
}
// 查询车辆静态信息详情
export function getVehicleDetail(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}`,
    params
  })
}
// App远程车辆控制
export function initAppRemoteControl(uuid, data) {
  return request({
    url: `/v0/vehicles/${uuid}/app/remote-control`,
    method: 'post',
    data
  })
}
// 获取车辆及其绑定的用户信息
export function getVehicleBind(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/bind`,
    params
  })
}
// 查询指定车辆的极值历史数据
export function searchVehicleAcmeHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/acme`,
    params
  })
}
// 查询指定车辆的可充电储能装置历史数据
export function searchVehicleChargeBatteryHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/chargebattery`,
    params
  })
}
// 查询指定车辆的发动机(引擎)历史数据
export function searchVehicleEngineHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/engine`,
    params
  })
}
// 查询指定车辆的燃料电池历史数据
export function searchVehicleFuelBatteryHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/fuelbattery`,
    params
  })
}
// 查询指定车辆的整车历史数据
export function searchVehicleIntegratedDataHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/integrateddata`,
    params
  })
}
// 查询指定车辆的登入历史数据
export function searchVehicleLoginHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/login`,
    params
  })
}
// 查询指定车辆的登出历史数据
export function searchVehicleLogoutHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/logout`,
    params
  })
}
// 查询指定车辆的驱动电机历史数据
export function searchVehicleMotorHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/motor`,
    params
  })
}
// 查询指定车辆的原始报文历史数据
export function searchVehicleOriginalHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/original`,
    params
  })
}
// 查询指定车辆的自定义历史数据
export function searchVehicleTransmitHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/transmit`,
    params
  })
}
// 获取车辆实时信息详情
export function getVehicleRealtime(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/realtime`,
    params
  })
}
// 远程车辆控制
export function initRemoteControl(uuid, data) {
  return request({
    url: `/v0/vehicles/${uuid}/remote-control`,
    method: 'post',
    data
  })
}
// 查询远程操作结果列表
export function searchRemoteOperateHistories(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/remote-operate-history`,
    params
  })
}
// 远程车辆查询
export function initRemoteQuery(uuid, data) {
  return request({
    url: `/v0/vehicles/${uuid}/remote-query`,
    method: 'post',
    data
  })
}
// 获取车辆的行程记录
export function getVehicleTrackStatistics(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/trackstatistics`,
    params
  })
}