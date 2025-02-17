import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰이 필요없는 API 경로 목록
const publicPaths = ['/api/login', '/api/register'];

// 요청 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    if (!publicPaths.includes(config.url)) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = (credentials) => api.post('/api/users/login', credentials);
export const signup = (userData) => api.post('/api/users/register', userData);
export const updateUserNickname = (nickname) => api.patch('/api/users/nickname', { nickname });
export const deleteUser = () => api.delete('/api/users');

export default api;
