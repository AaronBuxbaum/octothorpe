import gql from 'graphql-tag';

const LOG_IN = gql`
  mutation Login($userInfo: UserAuthentication!) {
    login(userInfo: $userInfo) {
      token
    }
  }
`;

const SIGN_UP = gql`
  mutation Signup($userInfo: UserAuthentication!) {
    signup(userInfo: $userInfo) {
      token
    }
  }
`;

export {
    LOG_IN,
    SIGN_UP,
};
