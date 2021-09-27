import React from 'react';
import {Cell, Typography} from '@components';
import i18n from '@i18n';
import styles from './styles';

export const NoticeCell = ({title = i18n.t('error_loading_data_message')}) => (
  <Cell>
    <Typography style={styles.textNotice} variant="H2-High-Emphasis">
      {title}
    </Typography>
  </Cell>
);
