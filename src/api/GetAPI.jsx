// const baseUrl = 'http://localhost:3000';

const baseUrl = 'http://localhost:5173/';



export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};

export const getApiUrl2 = (endpoint) => {
  return `${baseUrl2}/${endpoint}`;
};

