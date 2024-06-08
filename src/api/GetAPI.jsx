// const baseUrl = 'http://localhost:8000';
// 
 const baseUrl = 'http://192.168.1.41:8000';


export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};

