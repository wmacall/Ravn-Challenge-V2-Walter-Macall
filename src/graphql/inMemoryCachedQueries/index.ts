export const allPeople = {
  keyArgs: ['id'],
  keyFields: false,
  merge(existing: any, incoming: any, {readField}: any) {
    const merged = existing ? existing?.people?.slice(0) : [];
    incoming?.people.forEach((people: any) => {
      let personObject = {
        ['id']: readField('id', people),
        ['name']: readField('name', people),
        ['species']: readField('species', people),
        ['homeworld']: readField('homeworld', people),
        ['__typename']: 'Person',
      };
      merged.push({...personObject});
    });
    return {
      __typename: 'PeopleConnection',
      people: merged,
      pageInfo: {
        endCursor: incoming.pageInfo.endCursor,
        hasNextPage: incoming.pageInfo.hasNextPage,
      },
    };
  },
};
