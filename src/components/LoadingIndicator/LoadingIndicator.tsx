import {COLORS} from '@assets';
import i18n from '@i18n';
import {Typography} from 'components/Typography';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

export const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color={COLORS.TEXT_LIGHT} />
    <Typography style={styles.loadingText} variant="H2-Low-Emphasis">
      {i18n.t('loading')}
    </Typography>
  </View>
);
