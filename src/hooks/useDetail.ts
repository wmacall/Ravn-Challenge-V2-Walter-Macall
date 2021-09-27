import {useQuery} from '@apollo/client';
import {GET_PERSON_BY_ID} from 'graphql/queries/person';

export const useDetail = (id: string) => {
  const {
    loading: isLoading,
    error,
    data,
  } = useQuery(GET_PERSON_BY_ID, {
    variables: {
      id,
    },
  });
  console.log(data);
  return {
    isLoading,
    data,
    error,
  };
};
