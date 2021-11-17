declare module '@report-types/services-province' {
  export type ProvinceResponse = {
    iso: string;
    name: string;
    lat: string;
    long: string;
    province: string
  };

  export type ProvinceListResponse = ProvinceResponse[];
}
