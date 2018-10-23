import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import LoginForm from 'grommet/components/LoginForm';
import routeTo from '../../router/routeTo';
import { MATCHES } from '../../router/pages';

const SIGN_UP = gql`
  mutation Signup($userInfo: UserAuthentication!) {
    signup(userInfo: $userInfo) {
      token
    }
  }
`;

class Register extends React.PureComponent {
    state = {
        errors: [],
    };

    handleRegistrationFailure = (error) => {
        this.setState({
            errors: [error.message],
        });
    }

    clearErrors = () => {
        this.setState({
            errors: [],
        });
    }

    handleRegistrationSuccess = () => {
        this.clearErrors();
        routeTo(MATCHES);
    }

    render() {
        return (
            <Mutation
                mutation={SIGN_UP}
                ignoreResults
                onCompleted={this.handleRegistrationSuccess}
                onError={this.handleRegistrationFailure}
            >
                {(onSubmit) => (
                    <LoginForm
                        onSubmit={(userInfo) => onSubmit({ variables: { userInfo } })}
                        usernameType="text"
                        errors={this.state.errors}
                        title="Register"
                    />
                )}
            </Mutation>
        );
    }
}

export default Register;
