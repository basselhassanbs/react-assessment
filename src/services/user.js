import apiClient from './api-client';

class UserService {
  getAll(limit = 0, skip = 0) {
    return apiClient.get(`users?limit=${limit}&skip=${skip}`);
  }

  filter(key, value) {
    return apiClient.get(`/users/filter?key=${key}&value=${value}`);
  }
}

export default new UserService();
