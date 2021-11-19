declare module '@report-types/services-province' {
  export type ProvinceResponse = {
    iso: string;
    name: string;
    lat: string;
    long: string;
    province: string
  };

  export type CityResponse = {
    confirmed: number;
    confirmed_diff: number;
    date: string;
    deaths: number;
    deaths_diff: number;
    fips: number;
    last_update: string;
    lat: string;
    long: string;
    name: string;
  };

  export type CityListResponse = CityResponse[] | undefined;

  export type ProvinceListResponse = ProvinceResponse[];
}
