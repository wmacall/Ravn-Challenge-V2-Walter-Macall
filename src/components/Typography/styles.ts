import {StyleSheet} from 'react-native';
import {COLORS} from '@assets';
import {size} from '@constants';

export default StyleSheet.create({
  h2Default: {
    fontSize: size.m,
    color: COLORS.TEXT_DARK,
    fontWeight: '700',
    lineHeight: size.l,
  },
  h2LowEmphasis: {
    fontSize: size.m,
    color: COLORS.TEXT_LIGHT,
    fontWeight: '700',
    lineHeight: size.l,
  },
  h2HighEmphasis: {
    fontSize: size.m,
    color: COLORS.TEXT_EMPHASIS,
    fontWeight: '700',
    lineHeight: size.l,
  },
  p1Default: {
    fontSize: size.s,
    lineHeight: size.m,
    fontWeight: '400',
    color: COLORS.TEXT_LIGHT,
  },
  p1LowEmphasis: {
    fontSize: size.s,
    color: COLORS.TEXT_LIGHT,
    fontWeight: '400',
    lineHeight: size.m,
  },
  header: {
    color: COLORS.WHITE,
  },
});
