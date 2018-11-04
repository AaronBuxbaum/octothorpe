import gql from 'graphql-tag';

export const GET_HASHTAGS = gql`
  query {
    hashtags {
      id
      title
    }
  }
`;

export const ADD_HASHTAG = gql`
  mutation AddHashtag($title: String!) {
    addHashtag(title: $title) {
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

export const GET_SUGGESTIONS = gql`
  query GetSuggestions($title: String) {
    suggestions(title: $title)
  }
`;
