import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Header, LoadingCell, NoticeCell, PersonCell} from '@components';
import i18n from '@i18n';
import styles from './styles';
import {DETAIL_SCREEN} from '@constants';
import {useHome} from '@hooks';

export const Home = () => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const {navigate} = useNavigation();
  const {data, error, fetchMore, isLoading} = useHome();

  const onPress = (id: string) => {
    navigate(DETAIL_SCREEN, {id});
  };

  const onEndReached = () => {
    if (data?.pageInfo?.hasNextPage) {
      setIsLoadingMore(true);
      fetchMore({
        variables: {
          after: data?.pageInfo.endCursor,
        },
      });
      setIsLoadingMore(false);
    }
  };
  return (
    <View style={styles.container}>
      <Header title={i18n.t('home_screen_title')} />
      {error ? <NoticeCell /> : null}
      {isLoading ? (
        <LoadingCell />
      ) : (
        <FlatList
          data={data?.data}
          keyExtractor={({id}, index) => `${id}-${index}`}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item}) => <PersonCell onPress={onPress} {...item} />}
          onEndReachedThreshold={0}
          onEndReached={onEndReached}
          ListFooterComponent={isLoadingMore ? <LoadingCell /> : null}
        />
      )}
    </View>
  );
};
