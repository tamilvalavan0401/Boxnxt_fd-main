// apiConfig.js
const API_BASE_URL = 'https://voxnxt.vilvabusiness.com/api';

const endpoints = {
  login: `${API_BASE_URL}/login`,
  register: `${API_BASE_URL}/register`,
  logout: `${API_BASE_URL}/logout`,
  requestotp: `${API_BASE_URL}/requestotp`,
  getstake: `${API_BASE_URL}/getstake`,
  geonology: `${API_BASE_URL}/geonology`,
  // Add other endpoints here as needed
};

export default endpoints;
