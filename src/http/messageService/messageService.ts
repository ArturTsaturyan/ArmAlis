import { $authHost } from '..';

export default class MessageService {
  static sendMessage(data: any) {
    return $authHost.post(`/messages`, data);
  }
}
