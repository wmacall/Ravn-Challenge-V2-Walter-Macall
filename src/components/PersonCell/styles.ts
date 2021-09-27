import {size} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerCell: {
    flex: 1,
  },
  arrowButton: {
    paddingRight: size.xl,
    paddingVertical: size.xl,
  },
});
