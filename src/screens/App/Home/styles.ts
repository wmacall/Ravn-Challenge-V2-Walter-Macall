import {COLORS} from '@assets';
import {size} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  contentContainerStyle: {
    paddingBottom: size.xl,
  },
});
