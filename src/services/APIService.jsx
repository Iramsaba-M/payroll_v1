// apiService.js
import axios from 'axios';
import { getApiUrl} from '../api/GetAPI';


export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(getApiUrl(endpoint));
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for
     ${endpoint}:`, error);
    throw error;
  }
};


export const putData = async (endpoint) => {
  try {
    const response = await axios.put(getApiUrl(endpoint));
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for
     ${endpoint}:`, error);
    throw error;
  }
};


export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(getApiUrl(endpoint), data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error;
  }
};

export const postDataImage = async (endpoint, data) => {
  try {
    const response = await axios.post(getApiUrl(endpoint), data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error;
  }
};

export const patchData = async (endpoint, data) => {
  try {
    const response = await axios.patch(getApiUrl(endpoint), data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error;
  }
};
export const patchDatafiles = async (endpoint, data) => {
  try {
    const response = await axios.patch(getApiUrl(endpoint), data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error;
  }
};