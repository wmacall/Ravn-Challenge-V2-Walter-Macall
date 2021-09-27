import {useQuery} from '@apollo/client';
import {homeParser} from '@utils';
import {GET_ALL_PEOPLE} from 'graphql/queries/allPeople';

export const useHome = () => {
  const {loading: isLoading, error, data} = useQuery(GET_ALL_PEOPLE);
  const dataParsed = homeParser(data);
  return {
    isLoading,
    data: dataParsed,
    error,
  };
};
