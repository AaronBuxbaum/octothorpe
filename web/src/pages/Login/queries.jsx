import gql from 'graphql-tag';

const LOG_IN = gql`
  mutation Login($userInfo: UserAuthentication!) {
    login(userInfo: $userInfo) {
      token
      image
      firstName
      lastName
    }
  }
`;

const SIGN_UP = gql`
  mutation Signup($userInfo: UserAuthentication!) {
    signup(userInfo: $userInfo) {
      token
      image
      firstName
      lastName
    }
  }
`;

export {
  LOG_IN,
  SIGN_UP,
};
