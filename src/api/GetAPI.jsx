const baseUrl = 'http://localhost:8000';
// 
//  const baseUrl = 'http://192.168.0.205:8000';


export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};

