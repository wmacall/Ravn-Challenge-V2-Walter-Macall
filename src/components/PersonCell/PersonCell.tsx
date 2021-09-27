import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {ArrowIcon} from '@assets';
import {Cell, Separator, Typography} from '@components';
import {IPersonCellProps} from './types';
import styles from './styles';

export const PersonCell: FC<IPersonCellProps> = ({
  title,
  description,
  onPress,
  id,
}) => (
  <>
    <View style={styles.container}>
      <View style={styles.containerCell}>
        <Cell>
          <Typography>{title}</Typography>
          <Typography variant="P1">{description}</Typography>
        </Cell>
      </View>
      <Pressable onPress={() => onPress(id)} style={styles.arrowButton}>
        <ArrowIcon />
      </Pressable>
    </View>
    <Separator />
  </>
);
