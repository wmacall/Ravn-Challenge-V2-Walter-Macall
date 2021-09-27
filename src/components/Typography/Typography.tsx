import React, {FC} from 'react';
import {Text} from 'react-native';
import {ITypographyProps} from './types';
import styles from './styles';

export const Typography: FC<ITypographyProps> = ({
  children,
  variant = 'H2',
  style,
  numberOfLines = 2,
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'H2':
        return styles.h2Default;
      case 'H2-High-Emphasis':
        return styles.h2HighEmphasis;
      case 'H2-Low-Emphasis':
        return styles.h2LowEmphasis;
      case 'P1':
        return styles.p1Default;
      case 'P1-Low-Emphasis':
        return styles.p1LowEmphasis;
      case 'header':
        return {...styles.h2Default, ...styles.header};
      default:
        return styles.h2Default;
    }
  };

  const selectedStyle = getStyles();

  return (
    <Text numberOfLines={numberOfLines} style={[selectedStyle, style]}>
      {children}
    </Text>
  );
};
