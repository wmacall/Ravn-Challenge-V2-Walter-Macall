import {gql} from '@apollo/client';

export const GET_PERSON_BY_ID = gql`
  query person($id: ID) {
    person(id: $id) {
      name
      birthYear
      eyeColor
      hairColor
      skinColor
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
  }
`;

interface IVehicles {
  id: string;
  name: string;
}

interface IVehicleConnection {
  vehicles: [IVehicles] | [];
}
interface IPerson {
  name: string;
  birthYear: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  vehicleConnection: IVehicleConnection;
}
export interface IPersonDetail {
  person: IPerson;
}
