// const baseUrl = 'http://localhost:3000';

const baseUrl = 'http://192.168.0.133:8000';


export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};

// export const getApiUrl2 = (endpoint) => {
//   return `${baseUrl2}/${endpoint}`;
// };

// export const getApiUrl3 = (endpoint) => {
//   return `${baseUrl3}/${endpoint}`;
// };
