import { $authHost } from '..';

export default class FooterService {
  static footerLinks() {
    return $authHost.get('/categories');
  }
  static footerLinks1() {
    return $authHost.get('/services_types');
  }
}
