import gql from 'graphql-tag';

export const GET_HASHTAGS = gql`
  query {
    hashtags {
      id
      title
      intensity
    }
  }
`;

export const ADD_HASHTAG = gql`
  mutation AddHashtag($title: String!) {
    addHashtag(title: $title, intensity: 1) {
        id
    }
  }
`;

export const DELETE_HASHTAG = gql`
  mutation DeleteHashtag($id: ID!) {
    deleteHashtag(id: $id) {
      id
    }
  }
`;