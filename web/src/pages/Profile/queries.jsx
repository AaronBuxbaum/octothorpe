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
  mutation UpdateProfile($userInfo: UserProfileInput!, $image: Upload) {
    updateProfile(userInfo: $userInfo, image: $image) {
      firstName
      lastName
      image
    }
  }
`;
