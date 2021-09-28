import {useQuery} from '@apollo/client';
import {homeParser} from '@utils';
import {GET_ALL_PEOPLE, IPeopleResult} from 'graphql/queries/allPeople';

export const useHome = () => {
  const {
    loading: isLoading,
    error,
    data,
    fetchMore,
  } = useQuery<IPeopleResult>(GET_ALL_PEOPLE);
  const dataParsed = homeParser(data);

  return {
    isLoading,
    data: dataParsed,
    error,
    fetchMore,
  };
};
