import gql from 'graphql-tag';

const LOG_IN = gql`
  mutation Login($userInfo: UserAuthentication!) {
    login(userInfo: $userInfo) {
      token
      image
      username
    }
  }
`;

const SIGN_UP = gql`
  mutation Signup($userInfo: UserAuthentication!) {
    signup(userInfo: $userInfo) {
      token
      image
      username
    }
  }
`;

export {
  LOG_IN,
  SIGN_UP,
};
