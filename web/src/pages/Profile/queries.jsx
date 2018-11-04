import gql from 'graphql-tag';

export const GET_PROFILE = gql`
  query {
    user {
      firstName
      lastName
      image
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($userInfo: UserProfileInput!) {
    updateProfile(userInfo: $userInfo) {
      firstName
      lastName
      image
    }
  }
`;
