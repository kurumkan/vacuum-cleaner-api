import axios from 'axios';

const ROOT_URL = 'api/123'

export const getCurrentState = () => {
  return axios.get(`${ROOT_URL}`);
};

export default {
  getCurrentState
};