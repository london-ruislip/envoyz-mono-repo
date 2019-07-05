import gql from 'graphql-tag';

export const MARK_MAP_AS_COMPLETED = gql`
  mutation MapCompletion($id!: String) {
    Map(id: $id) @client
  }
`;
