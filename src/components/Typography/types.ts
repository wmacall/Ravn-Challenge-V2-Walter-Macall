import {ReactNode} from 'react';
import {TextProps, TextStyle} from 'react-native';

export type TTypographyVariantTypes =
  | 'H2'
  | 'H2-Low-Emphasis'
  | 'H2-High-Emphasis'
  | 'P1'
  | 'P1-Low-Emphasis'
  | 'header';

export interface ITypographyProps extends TextProps {
  variant?: TTypographyVariantTypes;
  style?: TextStyle;
  numberOfLines?: number;
  children?: ReactNode;
}
