import request from '@/utils/request'
export function searchVehicleModels(params) {
  return request({
    url: '/v0/models',
    params
  })
}
export function getRemoteOperateDetail(uuid, params) {
  return request({
    url: `/v0/remote-operates/${uuid}`,
    params
  })
}
export function searchVehicles(params) {
  return request({
    url: '/v0/vehicles',
    params
  })
}
export function searchVehicleFence(params) {
  return request({
    url: '/v0/vehicles/fence',
    params
  })
}
export function searchVehiclesRealtime(params) {
  return request({
    url: '/v0/vehicles/realtime',
    params
  })
}
export function searchVehicleXCall(params) {
  return request({
    url: '/v0/vehicles/xcall',
    params
  })
}
export function getVehicleDetail(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}`,
    params
  })
}
export function initAppRemoteControl(uuid, data) {
  return request({
    url: `/v0/vehicles/${uuid}/app/remote-control`,
    method: 'post',
    data
  })
}
export function getVehicleBind(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/bind`,
    params
  })
}
export function searchVehicleAcmeHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/acme`,
    params
  })
}
export function searchVehicleChargeBatteryHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/chargebattery`,
    params
  })
}
export function searchVehicleEngineHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/engine`,
    params
  })
}
export function searchVehicleFuelBatteryHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/fuelbattery`,
    params
  })
}
export function searchVehicleIntegratedDataHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/integrateddata`,
    params
  })
}
export function searchVehicleLoginHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/login`,
    params
  })
}
export function searchVehicleLogoutHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/logout`,
    params
  })
}
export function searchVehicleMotorHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/motor`,
    params
  })
}
export function searchVehicleOriginalHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/original`,
    params
  })
}
export function searchVehicleTransmitHistory(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/histories/transmit`,
    params
  })
}
export function getVehicleRealtime(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/realtime`,
    params
  })
}
export function initRemoteControl(uuid, data) {
  return request({
    url: `/v0/vehicles/${uuid}/remote-control`,
    method: 'post',
    data
  })
}
export function searchRemoteOperateHistories(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/remote-operate-history`,
    params
  })
}
export function initRemoteQuery(uuid, data) {
  return request({
    url: `/v0/vehicles/${uuid}/remote-query`,
    method: 'post',
    data
  })
}
export function getVehicleTrackStatistics(uuid, params) {
  return request({
    url: `/v0/vehicles/${uuid}/trackstatistics`,
    params
  })
}