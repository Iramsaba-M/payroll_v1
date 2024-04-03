const baseUrl = 'http://localhost:3000';
// 
// const baseUrl = 'http://192.168.0.142:8000';
// const baseUrl = 'http://192.168.0.150:5003';

export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};





