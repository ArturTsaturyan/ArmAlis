import { AxiosRequestConfig } from 'axios';
import { $authHost } from '..';

export default class CartService {
  static addCart(data: object) {
    return $authHost.post(`/cart`, data);
  }
  static productsOnCart(id: any) {
    return $authHost.get(`/cart?cart_id=${id}`);
  }
  static deletedProduct(data: AxiosRequestConfig<any> | undefined) {
    return $authHost.delete(`/cart/${data?.data?.id}`, data);
  }
}
