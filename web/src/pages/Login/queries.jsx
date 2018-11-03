import gql from 'graphql-tag';

const LOG_IN = gql`
  mutation Login($userInfo: UserAuthentication!) {
    login(userInfo: $userInfo) {
      token
      profileImage
      username
    }
  }
`;

const SIGN_UP = gql`
  mutation Signup($userInfo: UserAuthentication!) {
    signup(userInfo: $userInfo) {
      token
      profileImage
      username
    }
  }
`;

export {
  LOG_IN,
  SIGN_UP,
};
