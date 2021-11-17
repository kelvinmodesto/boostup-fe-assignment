import { ServiceOptions } from '@report-types/services';

import { apiAddress } from 'config';
import useFetchHttp, { IncomingOptions } from 'use-http';

function useFetch<ResponseType = any>(serviceOptions: ServiceOptions) {

  const options: IncomingOptions = {
    responseType: serviceOptions.responseType ?? 'json',
    headers: serviceOptions.customHeaders,
    cachePolicy: serviceOptions.cachePolicy,
  };

  return useFetchHttp<ResponseType>(
    `${apiAddress}${serviceOptions.url}`,
    options,
    serviceOptions.requestOnMount ? [] : undefined,
  );
}

export default useFetch;
