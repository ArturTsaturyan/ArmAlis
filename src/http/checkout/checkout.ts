import { $authHost } from '..';

export default class Checkout {
  static checkout(data?: any) {
    return $authHost.post(`/checkout`, data);
  }
}
