import {COLORS} from '@assets';
import {size} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.RAVN_BLACK,
  },
  container: {
    backgroundColor: COLORS.RAVN_BLACK,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
  },
  button: {
    position: 'absolute',
    left: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: size.xl,
  },
});
