// const baseUrl = 'http://localhost:3000';
// 
const baseUrl = 'http://192.168.0.100:8000';


export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};

