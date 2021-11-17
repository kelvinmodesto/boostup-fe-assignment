import { ServiceOptions } from '@report-types/services';

import useFetch from 'hooks/useFetch';
import { CachePolicies } from 'use-http';

export const useFetchStatesList = () => {
  const serviceOptions: ServiceOptions = {
    url: '/provinces/USA?order=province&sort=asc',
    requestOnMount: true,
    cachePolicy: CachePolicies.NO_CACHE,
  };
  
  return useFetch(serviceOptions);
};

export const useFetchReport = () => {
  const serviceOptions: ServiceOptions = {
    url: '/reports',
    requestOnMount: true,
    cachePolicy: CachePolicies.NO_CACHE,
  };
  
  return useFetch(serviceOptions);
};