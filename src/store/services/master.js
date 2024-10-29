import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const URL = `${publicRuntimeConfig.API_URL}`;

export function getChainById(data) {
  return axios.post(`${URL}/master/getChainById`, data);
}

export function getRegion(data) {
  return axios.post(`${URL}/master/getRegionByPage`, data);
}

export function getRegionGroup(data) {
  return axios.post(`${URL}/master/getRegionGroup`, data);
}

export function getRegionByRegionGroupId(data) {
  return axios.post(`${URL}/master/getRegionByRegionGroupId`, data);
}

export function getRegionAll() {
  return axios.post(`${URL}/master/getRegion`);
}

export function getRole(data) {
  return axios.post(`${URL}/master/getRole`, data);
}

export function getReason(data) {
  return axios.get(`${URL}/master/getReason`);
}

export function getYear(data) {
  return axios.get(`${URL}/master/getYear`);
}

export function getChainLookingForwardByNetConChainId(data) {
  return axios.post(
    `${URL}/master/getChainLookingForwardByNetConChainId`,
    data
  );
}

export function getAllModule() {
  return axios.get(`${URL}/master/getAllModule`);
}

export function getAllFunction() {
  return axios.get(`${URL}/master/getAllFunction`);
}

export function getCombineModuleFunction() {
  return axios.get(`${URL}/master/getCombineModuleFunction`);
}

export function getYearItemGroup(data) {
  return axios.post(`${URL}/master/getYearItemGroup`, data);
}

export function getGroupRegion(data) {
  return axios.post(`${URL}/master/getGroupRegion`, data);
}

export function getOpenPeriod(data) {
  return axios.post(`${URL}/master/getOpenPeriod`, data);
}

export function setOpenPeriod(data) {
  return axios.post(`${URL}/master/setOpenPeriod`, data);
}

export function getAllChainDistinct(data) {
  return axios.post(`${URL}/master/getAllChainDistinct`, data);
}

export function getChainLv3(data) {
  return axios.post(`${URL}/master/getChainLv3`, data);
}
