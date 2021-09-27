import React, {FC} from 'react';
import {Typography} from '@components';
import {View} from 'react-native';
import {ISectionHeaderProps} from './types';
import styles from './styles';

export const SectionHeader: FC<ISectionHeaderProps> = ({title}) => (
  <View style={styles.container}>
    <Typography variant="H2">{title}</Typography>
  </View>
);
