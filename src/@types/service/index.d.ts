declare module '@report-types/services' {
  import type { CachePolicies, ResponseType } from 'use-http';

  export type ServiceOptions = {
    url: string;
    requestOnMount?: boolean;
    customHeaders?: { [key: string]: string };
    responseType?: ResponseType;
    cachePolicy?: CachePolicies;
  };

  export type ErrorResponse = {
    message: string;
    uri: string;
  };
}
