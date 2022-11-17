import { $authHost } from '..';

export default class Services {
  static services(id?: any) {
    return $authHost.get(`services?services_type_ids=${id}`);
  }
}
