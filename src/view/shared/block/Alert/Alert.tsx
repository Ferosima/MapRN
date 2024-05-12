import AlertBackdrop from './components/AlertBackdrop/AlertBackdrop';
import AlertBase from './components/AlertBase/AlertBase';
import AlertButton from './components/AlertButton/AlertButton';
import useHideKeyboardHook from './hooks/useHideKeyboardHook';
import { useTimeoutHook } from './hooks/useTimeoutHook';
import styles from './styles';
import AlertTitle from './components/AlertTitle/AlertTitle';
import AlertMessage from './components/AlertMessage/AlertMessage';
import { Modal, StyleSheet, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import Line from '~view/shared/elements/Line/Line';
import { IAlert } from '~domain/store/slices/alerts/types';
import { hideAlert } from '~domain/store/slices/alerts';

export type Props = {
  alert: IAlert;
};

const Alert = ({ alert }: Props) => {
  const dispatch = useDispatch();

  const handleHide = () => {
    dispatch(hideAlert(alert.uuid));
  };

  useTimeoutHook(alert.options?.timeout, handleHide);
  useHideKeyboardHook();

  return (
    <Modal
      style={styles.modal}
      animationType="fade"
      hardwareAccelerated
      transparent>
      <View style={[StyleSheet.absoluteFill, { zIndex: 100 }]}>
        <AlertBackdrop>
          <AlertBase important={false} visible>
            <View style={styles.content}>
              {alert.title ? (
                <View style={styles.offsetSmall}>
                  <AlertTitle>{alert.title}</AlertTitle>
                </View>
              ) : null}

              {alert.message ? (
                <View style={styles.offsetSmall}>
                  <AlertMessage>{alert.message}</AlertMessage>
                </View>
              ) : null}
            </View>
            {alert.buttons?.length ? (
              <View style={styles.buttonsRow}>
                <View>
                  {alert.buttons?.map((option, index) => (
                    <View key={index}>
                      <Line />
                      <AlertButton
                        callback={handleHide}
                        style={option.style}
                        onPress={option.onPress}
                        text={option.text}
                      />
                    </View>
                  ))}
                </View>
              </View>
            ) : null}
          </AlertBase>
        </AlertBackdrop>
      </View>
    </Modal>
  );
};

export default Alert;
