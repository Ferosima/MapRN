export declare class IGeolocationModule {
  public static getLiveLocation(): Promise<{
    heading: number | null;
    latitude: number;
    longitude: number;
  }>;
}
