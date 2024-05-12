import { IGeolocationModule } from './types';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import { ICoords } from '~domain/types/map';

export class GeolocationModule implements IGeolocationModule {
  public static getLiveLocation = (): Promise<ICoords> =>
    new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const cords = {
            heading: position?.coords?.heading,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          resolve(cords);
        },
        error => {
          reject(error.message);
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 15000 },
      );
    });

  public static getAddressByCoord = async (
    coords: ICoords,
  ): Promise<string | undefined> => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=${key}&language=en`,
      );

      return response.data.results[0].formatted_address;
    } catch (error) {
      console.error('getAddressByCoord', error);
      return;
    }
  };
}
