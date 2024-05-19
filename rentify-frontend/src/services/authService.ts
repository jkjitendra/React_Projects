import axios from 'axios';
import { User } from '../models/user.model';
import { BASE_URL } from './queryService';

const API_URL = '/api/v1/users';

interface LoginCredentials {
  email: string;
  password: string;
}

const register = (user: Omit<User, 'id'> & { password: string }) => {
  const data = axios.post(`${BASE_URL}${API_URL}/register`, user);
  return data;
};

const login = (credentials: LoginCredentials) => {
  return axios.post(`${BASE_URL}${API_URL}/login`, credentials)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = (): User | null => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr) as User;
    return null;
};
  
  
export default {
    register,
    login,
    logout,
    getCurrentUser,
};