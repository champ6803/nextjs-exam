import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const URL = `${publicRuntimeConfig.API_URL}`;

export function uploadMonthlySaleExport(data) {
  return axios.post(`${URL}/upload/uploadMonthlySaleExport`, data);
}

export function getMonthlySaleExportByYear(data) {
  return axios.post(`${URL}/upload/getMonthlySaleExportByYear`, data);
}
