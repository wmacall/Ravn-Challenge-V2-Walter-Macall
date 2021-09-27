import React from 'react';
import {FlatList, View} from 'react-native';
import {Header, LoadingCell, PersonCell} from '@components';
import i18n from '@i18n';
import styles from './styles';
import {useHome} from '@hooks';
import {DETAIL_SCREEN} from '@constants';

export const Home = ({navigation}) => {
  const {data, isLoading} = useHome();

  const onPress = (id: string) => {
    navigation.navigate(DETAIL_SCREEN, {id});
  };

  return (
    <View style={styles.container}>
      <Header title={i18n.t('home_screen_title')} />
      {isLoading ? (
        <LoadingCell />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <PersonCell onPress={onPress} {...item} />}
        />
      )}
    </View>
  );
};
