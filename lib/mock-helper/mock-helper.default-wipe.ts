import { InjectionToken } from '@angular/core';

import { AnyType } from '../common/core.types';
import ngMocksUniverse from '../common/ng-mocks-universe';

import mockHelperDefaultMock from './mock-helper.default-mock';

export default (source: AnyType<any> | InjectionToken<any>): void => {
  ngMocksUniverse.cacheDeclarations.clear();
  ngMocksUniverse.config.get('ngMocksDepsSkip')?.clear();
  ngMocksUniverse.getDefaults().delete(source);
  mockHelperDefaultMock(source);
};
