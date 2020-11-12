import { InjectionToken, Provider } from '@angular/core';

import { AnyType } from '../common/core.types';
import useFactory from '../mock-service/helper.use-factory';
import { MockService } from '../mock-service/mock-service';

const defaultValue = {};

export function MockProviders(...providers: Array<AnyType<any> | InjectionToken<any>>): Provider[] {
  return providers.map((provider: any) => MockProvider(provider, defaultValue));
}

/**
 * @see https://github.com/ike18t/ng-mocks#how-to-mock-a-provider
 */
export function MockProvider<I extends object>(instance: AnyType<I>, overrides?: Partial<I>): Provider;

/**
 * @see https://github.com/ike18t/ng-mocks#how-to-mock-a-provider
 */
export function MockProvider<I>(provider: InjectionToken<I>, instance?: I): Provider;

export function MockProvider(provide: any, useValue: any = defaultValue): Provider {
  if (useValue !== defaultValue) {
    return {
      provide,
      useValue,
    };
  }
  if (typeof provide === 'function') {
    return useFactory(provide, () => MockService(provide));
  }

  return {
    provide,
    useValue: undefined,
  };
}
