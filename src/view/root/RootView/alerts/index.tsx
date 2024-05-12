import { StyleSheet, View } from 'react-native';
import React, { createContext } from 'react';

import { useAppSelector } from '~domain/hooks/useStore';
import Alert from '~view/shared/block/Alert/Alert';

export const AlertContext = createContext(null);

const AlertsProvider = (props: React.PropsWithChildren): React.ReactElement => {
  const alerts = useAppSelector(state => state.alerts.list);

  return (
    <View style={StyleSheet.absoluteFill}>
      {alerts.map(alert => (
        <Alert key={alert.uuid} alert={alert} />
      ))}

      {/* Global View for snapshot */}
      <View collapsable={false} style={StyleSheet.absoluteFill}>
        {props.children}
      </View>
    </View>
  );
};

export default AlertsProvider;
