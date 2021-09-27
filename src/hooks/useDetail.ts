import {useQuery} from '@apollo/client';
import {GET_PERSON_BY_ID, IPersonDetail} from 'graphql/queries/person';
import {detailParser} from 'utils/detailParser';

export const useDetail = (id: string) => {
  const {
    loading: isLoading,
    error,
    data,
  } = useQuery<IPersonDetail>(GET_PERSON_BY_ID, {
    variables: {
      id,
    },
  });

  const detailParsed = detailParser(data);
  return {
    isLoading,
    data: detailParsed,
    error,
  };
};
