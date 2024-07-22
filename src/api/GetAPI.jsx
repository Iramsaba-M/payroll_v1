// const baseUrl = 'http://localhost:8000';
// 
 const baseUrl = 'http://127.0.0.1:8000';

//const baseUrl = 'http://python-app-image:8000';

export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};

