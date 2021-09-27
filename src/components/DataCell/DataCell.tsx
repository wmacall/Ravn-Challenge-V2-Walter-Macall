import React, {FC} from 'react';
import {View} from 'react-native';
import {Cell, Separator, Typography} from '@components';
import {IDataCellProps} from './types';
import styles from './styles';

export const DataCell: FC<IDataCellProps> = ({title, description}) => (
  <>
    <Cell>
      <View style={styles.container}>
        <Typography variant="H2-Low-Emphasis">{title}</Typography>
        <Typography>{description}</Typography>
      </View>
    </Cell>
    <Separator />
  </>
);
