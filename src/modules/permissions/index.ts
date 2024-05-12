import { IPermissionsModule } from './types';
import { Platform } from 'react-native';
import {
  PERMISSIONS,
  Permission,
  check,
  request,
} from 'react-native-permissions';
import { ResultMap } from 'react-native-permissions/dist/typescript/results';

export class PermissionsModule implements IPermissionsModule {
  public static PERMISSIONS_LOCATION = Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    default: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  });

  public static check = async (
    permission: Permission,
  ): Promise<ResultMap[keyof ResultMap]> => await check(permission);

  public static request = async (
    permission: Permission,
  ): Promise<ResultMap[keyof ResultMap]> => await request(permission);
}
