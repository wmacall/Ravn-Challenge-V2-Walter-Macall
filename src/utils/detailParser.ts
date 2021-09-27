import {IPersonDetail} from 'graphql/queries/person';

export const detailParser = (data: IPersonDetail | undefined) => {
  const vehicles = data?.person?.vehicleConnection?.vehicles;
  let canShowVehicles = vehicles && vehicles.length > 0;
  return {
    ...data,
    canShowVehicles,
  };
};
