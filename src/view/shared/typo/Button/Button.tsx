import DefaultButton, {
  DefaultButtonProps,
} from './components/Default/Default';

import OutlineButton, {
  OutlineButtonProps,
} from './components/Outline/Outline';
import React from 'react';

export type TButtonProps = { type: 'default' | 'outline' };

export type ButtonProps = DefaultButtonProps | OutlineButtonProps;

const Button = ({ type, ...props }: ButtonProps): React.ReactElement | null => {
  switch (type) {
    case 'default':
      return <DefaultButton {...props} />;
    case 'outline':
      return <OutlineButton {...props} />;
    default:
      return null;
  }
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
