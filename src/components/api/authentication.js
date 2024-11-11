import apiRequest from './api';

export const register = async (email, password, role) => {
  try {
    const data = await apiRequest('/auth/register/', 'POST', {
      email,
      password,
      role,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const data = await apiRequest('/auth/login/', 'POST', { email, password });
    return data;
  } catch (error) {
    throw error;
  }
};
