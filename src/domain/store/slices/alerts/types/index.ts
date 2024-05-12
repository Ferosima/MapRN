export interface IAlert {
  uuid: string;
  title: string;
  message: string | undefined;
  buttons?: IAlertButton[] | undefined;
  options?: IAlertOptions | undefined;
}

export interface IAlertButton {
  text: string;
  onPress?: ((value?: string) => void) | undefined;
  style?: 'default' | 'cancel' | 'destructive' | undefined;
}

export interface IAlertOptions {
  /** timeout to automatically close alert */
  timeout?: number;
  /** callback will be called after closing alert fully */
  onDismiss?: (() => void) | undefined;

  image?: string | number;

  /** Mean use native modal to overwrite screens */
  coverScreen?: boolean;
}
