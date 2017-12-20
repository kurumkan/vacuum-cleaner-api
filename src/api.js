import axios from 'axios';

const ROOT_URL = 'api/123/'

export const getCurrentState = () => axios.get(`${ROOT_URL}`);

export const getStats = () => axios.get(`${ROOT_URL}stats`);

export const toggleDevice = () => axios.put(`${ROOT_URL}onoff`);

export const setMode = (mode) => axios.put(`${ROOT_URL}mode`, { mode });

export default {
  getCurrentState,
  getStats,
  toggleDevice,
  setMode
};