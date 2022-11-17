import { $authHost, $host1 } from '..';

export default class ChangeUserInfo {
  static changePassoword(data?: any) {
    return $authHost.post(`/change-password`, data);
  }
  static changeInfo(id?: any, data?: any) {
    return $authHost.put(`/dashboard/user/${id}`, data);
  }
}
