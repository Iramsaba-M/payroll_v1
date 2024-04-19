// const baseUrl = 'http://localhost:3000';

const baseUrl = 'http://localhost:5173/';



export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};
