import { $authHost } from '..';

export default class TextsService {
  static texts() {
    return $authHost.get(`/texts`);
  }
}
