import React, {FC} from 'react';
import {Pressable, SafeAreaView, StatusBar, View} from 'react-native';
import {COLORS} from '@assets';
import {useNavigation} from '@react-navigation/core';
import {BackArrowIcon} from '@assets';
import {Typography} from '@components';
import styles from './styles';
import {IHeaderProps} from './types';

export const Header: FC<IHeaderProps> = ({title, showBackButton = false}) => {
  const {goBack} = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.RAVN_BLACK} />
      <View style={styles.container}>
        {showBackButton ? (
          <Pressable style={styles.button} onPress={goBack}>
            <BackArrowIcon />
          </Pressable>
        ) : null}
        <Typography variant="header">{title}</Typography>
      </View>
    </SafeAreaView>
  );
};
