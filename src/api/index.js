import axios from 'axios';

const url = process.env.VUE_APP_BASE_URL;
const cors = process.env.VUE_APP_CORS;

const ApiService = {
  getCategories() {
    return axios.get(`${cors}${url}/categories`);
  },
  getProducts(categoryId) {
    return axios.get(`${cors}${url}/products/category/${categoryId}`);
  }
};

export default ApiService;
