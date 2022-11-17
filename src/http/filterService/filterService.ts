import { NavigationType } from 'react-router-dom';
import { $authHost, $host1 } from '..';

export default class FilterService {
  static filterColor() {
    return $authHost.get('/colors');
  }
  static filterSize() {
    return $host1.get('/sizes');
  }
  static filterCountry() {
    return $authHost.get('/manufacturers');
  }
  static filterThicknesses() {
    return $host1.get('/thicknesses');
  }
  static filtersAll(
    colorId?: any,
    sizeId?: any,
    thicknessId?: any,
    manufacturerId?: any,
    serviceId?: any,
    id?: any,
    pageId?: any,
    code?: any,
    rangeData?: any,
    sort?: any,
    direction?: any,
  ) {
    return $authHost.get(
      `/products?page=${pageId}&category_ids=${id}&color_ids=${colorId ? colorId : ''}&size_ids=${
        sizeId ? sizeId : ''
      }&thickness_ids=${thicknessId ? thicknessId : ''}&manufacturer_ids=${
        manufacturerId ? manufacturerId : ''
      }&service_ids=${serviceId ? serviceId : ''}&code=${code ? code : ''}&range_price=${
        rangeData ? rangeData : ''
      }&sort=${sort ? sort : ''}&direction=${direction ? direction : ''}`,
    );
  }
  static filtersAllSearch(
    colorId?: any,
    sizeId?: any,
    thicknessId?: any,
    manufacturerId?: any,
    serviceId?: any,
    pageId?: any,
    code?: any,
    searchInputChange?: any,
    rangeData?: any,
    sort?: any,
    direction?: any,
  ) {
    return $authHost.get(
      `/products?page=${pageId}&color_ids=${colorId ? colorId : ''}&size_ids=${
        sizeId ? sizeId : ''
      }&thickness_ids=${thicknessId ? thicknessId : ''}&manufacturer_ids=${
        manufacturerId ? manufacturerId : ''
      }&service_ids=${serviceId ? serviceId : ''}&code=${code ? code : ''}&search=${
        searchInputChange ? searchInputChange : ''
      }&range_price=${rangeData ? rangeData : ''}&sort=${sort ? sort : ''}&direction=${
        direction ? direction : ''
      }`,
    );
  }
}
