import styles from './styles';
import Icon, { IconProps } from '../Icon/Icon';
import Text from '../Text/Text';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import Row from '~view/shared/block/Row/Row';
import { STYLES } from '~view/constants/theme/defaultStyles';
import { Colors, ColorsPresets } from '~view/constants/theme/colors';

export type InputProps = {
  wrapperStyle?: ViewProps['style'];
  /** Left icon will be hidden until any props will be set  */
  leftIconProps?: IconProps;
  /** Provide props to the text field component */
  textFieldProps?: TextInputProps;
  /** Enabling clear input modification */
  withClear?: boolean;
  /**
   * - when you put string it display error message under a input component and red line
   * - when you put true it display just red line
   */
  error?: string | boolean;
  /** Show red mark near placeholder */
  required?: boolean;
  /** Default input value */
  value?: string;
  /** Custom placeholder text */
  placeholder?: string;
  /** Display line under the input or not. Default: true */
  line?: boolean;
  /** Need for tests */
  inputTestID?: string;
  submitTestID?: string;

  focused?: boolean;

  onFocus?: () => void;
  onPress?: () => void;
  onClear?: () => void;
};

const Input = (props: InputProps): JSX.Element => {
  const inputRef = useRef<TextInput>(null);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(props.value);

  const active = useMemo(
    () => Boolean(props.focused || focused),
    [props.value, props.focused, focused],
  );
  /**
   * Effect should apply new changes to local value if it was
   * changed in the props
   */
  useEffect(() => {
    if (props.value !== undefined && props.value !== value) {
      setValue(props.value);
    }
  }, [props.value, setValue, value]);

  /** Method should set focused state to activate placeholder animation */
  const onFocus = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      if (props.textFieldProps?.onFocus) {
        props.textFieldProps.onFocus(event);
      }
      props.onFocus?.();
    },
    [props.textFieldProps, props.onFocus],
  );

  /** Method should set focused state to deactivate placeholder animation */
  const onBlur = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      if (props.textFieldProps?.onBlur) {
        props.textFieldProps.onBlur(event);
      }
    },
    [props.textFieldProps],
  );

  /** Method should activate focus on the TextField component */
  const handlePress = useCallback(() => {
    props.onPress?.();
    if (!props.textFieldProps?.editable) return;
    inputRef.current?.focus();
  }, [props.onPress, props.textFieldProps?.editable]);
  /**
   * Method should call clear method at the TextField and set local value as empty
   * string. Please that calling .clear() will not call .onChangeText method at the
   * TextField so we need manually clear value here.
   */
  const handleClearInput = useCallback(() => {
    inputRef.current?.clear();
    props.onClear?.();
    handleChangeText('');
  }, []);

  const handleChangeText = useCallback(
    text => {
      setValue(text);
      if (props.textFieldProps?.onChangeText) {
        props.textFieldProps.onChangeText(text);
      }
    },
    [props.textFieldProps],
  );

  return (
    <View style={props.wrapperStyle}>
      <Row style={styles.wrapper}>
        <Row style={[STYLES.TEXT_FILL, STYLES.ALIGN_CENTER]}>
          <Pressable
            onPress={handlePress}
            style={[styles.pressable, active ? styles.active : undefined]}>
            <TextInput
              {...props.textFieldProps}
              onPressIn={handlePress}
              onFocus={onFocus}
              onBlur={onBlur}
              blurOnSubmit
              placeholderTextColor={Colors[ColorsPresets.Gray4]}
              placeholder={props.placeholder}
              ref={inputRef}
              style={[styles.textField]}
              testID={props?.inputTestID}
              onChangeText={handleChangeText}
              value={value}
            />
            {props.withClear && value ? (
              <TouchableOpacity
                onPress={handleClearInput}
                hitSlop={{ bottom: 12, left: 8, right: 8, top: 12 }}>
                <Icon
                  color={ColorsPresets.Gray2}
                  name={'CloseFilled'}
                  disabled
                  style={styles.rightIcon}
                />
              </TouchableOpacity>
            ) : null}
          </Pressable>
        </Row>
      </Row>
      {typeof props.error === 'string' ? (
        <Text type="b6" numberOfLines={2} color={ColorsPresets.Danger}>
          {props.error}
        </Text>
      ) : null}
    </View>
  );
};

Input.defaultProps = {
  line: true,
};

export default Input;
