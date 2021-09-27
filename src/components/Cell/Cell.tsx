import React, {FC} from 'react';
import {View} from 'react-native';
import {ICellProps} from './types';
import styles from './styles';

export const Cell: FC<ICellProps> = ({children}) => (
  <View style={styles.container}>{children}</View>
);
