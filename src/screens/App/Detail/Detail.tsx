import React from 'react';
import {ScrollView, View} from 'react-native';
import {DataCell, Header, LoadingCell, SectionHeader} from '@components';
import {useDetail} from 'hooks/useDetail';
import {useRoute} from '@react-navigation/core';
import i18n from '@i18n';

export const Detail = () => {
  const {params} = useRoute();
  const {isLoading, data} = useDetail(params?.id);
  return (
    <View>
      <Header showBackButton title="Detail Screen" />
      <ScrollView>
        {isLoading ? (
          <LoadingCell />
        ) : (
          <>
            <SectionHeader title={i18n.t('detail_screen_title')} />
            <DataCell title="Eye color" description={data?.person?.eyeColor} />
            <DataCell
              title="Hair color"
              description={data?.person?.hairColor}
            />
            <DataCell
              title="Skin Color"
              description={data?.person?.skinColor}
            />
            <DataCell
              title="Birth Year"
              description={data?.person?.birthYear}
            />
            <SectionHeader title={i18n.t('detail_screen_vehicles_section')} />
            {data?.person.vehicleConnection.vehicles.map(({name}) => (
              <DataCell title={name} />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};
