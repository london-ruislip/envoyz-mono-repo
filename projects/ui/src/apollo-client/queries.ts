import gql from 'graphql-tag';

export const GET_MAPS = gql`
  query Maps {
    Map @client {
      id
      name
      imageUrl
      available
      assignments {
        user
        checkedOutAt
        completedAt!
      }
    }
  }
`;

export const GET_MAP_QUERY = gql`
  query Map($id: String!) {
    map(id: $id) {
      id
      name
      imageUrl
      available
      assignments {
        user
        checkedOutAt
        completedAt!
      }
    }
  }
`;

