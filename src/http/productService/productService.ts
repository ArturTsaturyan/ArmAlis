import { $authHost } from '..';

export default class ProductService {
  static loadTypes(currentPage = 1) {
    return $authHost.get(`/categories?page=${currentPage}`);
  }
  static getProducts() {
    return $authHost.get(`/products`);
  }
  static getProductInnerPage(id: number) {
    return $authHost.get(`/products/${id}`);
  }
  static getRecentProducts() {
    return $authHost.get(`/products/recent`);
  }
  static getFiltredProduct(id: number) {
    return $authHost.get(`/products?category_ids=${id}`);
  }
  static getFiltredProducts(id: number) {
    return $authHost.get(`/products/${id}`);
  }
}

//.then(res => console.log(res, 'llllllllllll'))
// .catch(function (error) {
//   if (error.response) {
//     // Request made and server responded
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response.headers);
//   } else if (error.request) {
//     // The request was made but no response was received
//     console.log(error.request);
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.log('Error', error.message);
//   }
// });
