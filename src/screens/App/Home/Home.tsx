import React from 'react';
import {Pressable, View} from 'react-native';
import {Header, Typography} from '@components';
import i18n from '@i18n';
import styles from './styles';

export const Home = ({navigation}) => (
  <View style={styles.container}>
    <Header title={i18n.t('home_screen_title')} />
    <Typography>Home</Typography>
    <Pressable onPress={() => navigation.navigate('Detail')}>
      <Typography>Go to Detail</Typography>
    </Pressable>
  </View>
);
