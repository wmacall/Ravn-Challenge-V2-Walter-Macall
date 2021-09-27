import React from 'react';
import {View} from 'react-native';
import {Header} from '@components';
import {useDetail} from 'hooks/useDetail';

export const Detail = () => {
  const {data} = useDetail('cGVvcGxlOjE=');
  return (
    <View>
      <Header showBackButton title="Detail Screen" />
    </View>
  );
};
