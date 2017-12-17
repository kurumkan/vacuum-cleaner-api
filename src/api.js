import axios from 'axios';

const ROOT_URL = '/api/pins/'

export const getPins = (offset = 0, limit = 10) => {
  return axios.get(`${ROOT_URL}?offset=${offset}&limit=${limit}`);
};

export default {
  getPins
};