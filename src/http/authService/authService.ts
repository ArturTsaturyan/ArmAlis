import { $authHost, $host } from '..';

export default class UserService {
  static login(data: any) {
    return $host.post('/login', data);
  }

  static register(data: any) {
    return $host.post('/register', data);
  }

  static getMe() {
    return $authHost.get('/dashboard/user');
  }

  static logout() {
    return $authHost.post('/logout');
  }
}
