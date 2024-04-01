const baseUrl = 'http://localhost:3000';

// const baseUrl = 'http://192.168.0.142:8000';
const baseUrl2 = 'http://192.168.0.142:5002';

const baseUrl3 = 'http://localhost:3000';

export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};

export const getApiUrl2 = (endpoint) => {
  return `${baseUrl2}/${endpoint}`;
};

export const getApiUrl3 = (endpoint) => {
  return `${baseUrl3}/${endpoint}`;
};

