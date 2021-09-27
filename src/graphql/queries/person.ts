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
          name
        }
      }
    }
  }
`;
