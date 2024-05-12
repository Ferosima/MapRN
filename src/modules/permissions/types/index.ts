import {
  Permission,
  PermissionStatus,
} from 'react-native-permissions';

export declare class IPermissionsModule {
  public static PERMISSIONS_LOCATION: Permission;

  public static check(permission: Permission): Promise<PermissionStatus>;

  public static request(permission: Permission): Promise<void>;
}
