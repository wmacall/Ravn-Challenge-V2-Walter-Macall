import {IPeopleResult} from 'graphql/queries/allPeople';

export const homeParser = (data: IPeopleResult | undefined) => {
  const parsedPeople = data?.allPeople?.people?.map(
    ({name, id, homeworld, species}) => {
      let description = `${species?.name ? species?.name : 'Human'} from ${
        homeworld?.name
      }`;
      return {
        id,
        title: name,
        description,
      };
    },
  );

  return {
    pageInfo: data?.allPeople.pageInfo,
    data: parsedPeople,
  };
};
