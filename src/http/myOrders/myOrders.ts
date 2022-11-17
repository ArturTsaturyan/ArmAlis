import { $authHost } from '..';

export default class MyOrders {
  static getMyOrders() {
    return $authHost.get('/dashboard/orders');
  }
}
