import apiClient from './api-client';

class ProductService {
  getAll(limit = 0, skip = 0) {
    return apiClient.get(`products?limit=${limit}&skip=${skip}`);
  }

  // filter(key, value) {
  //   return apiClient.get(`/products/filter?key=${key}&value=${value}`);
  // }
}

export default new ProductService();
