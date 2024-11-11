import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; 

const getToken = () => {
  return localStorage.getItem('token');
};

const apiRequest = async (endpoint, method = 'GET', payload = null) => {
  try {
    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const config = {
      method,
      url: `${API_BASE_URL}${endpoint}`,
      headers,
      ...(payload && { data: payload }),
    };

    const response = await axios(config);
    return response.data; 

  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      throw error.response.data;
    } else if (error.request) {
      console.error('Error request:', error.request);
      throw new Error('Network error');
    } else {
      console.error('Error message:', error.message);
      throw error;
    }
  }
};

export default apiRequest;
