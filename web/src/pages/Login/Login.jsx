import React from 'react';
import LoginForm from 'grommet/components/LoginForm';
import routeTo from '../../router/routeTo';
import { REGISTER, MATCHES } from '../../router/pages';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { saveToken } from '../../storage/localStorage';

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

class Login extends React.PureComponent {
    state = {
        errors: [],
    };

    handleFailure = (error) => {
        this.setState({
            errors: [error.message],
        });
    }

    clearErrors = () => {
        this.setState({
            errors: [],
        });
    }

    handleSuccess = (response) => {
        const key = Object.keys(response)[0];
        const token = response[key].token;
        this.clearErrors();
        saveToken(token);
        routeTo(MATCHES);
    }

    isRegistrationPage = () => this.props.location.pathname.includes(REGISTER);

    getMutation = () =>
        this.isRegistrationPage() ? SIGN_UP : LOG_IN;

    render() {
        return (
            <Mutation
                mutation={this.getMutation()}
                onCompleted={this.handleSuccess}
                onError={this.handleFailure}
            >
                {(onSubmit) => (
                    <LoginForm
                        onSubmit={(userInfo) => onSubmit({ variables: { userInfo } })}
                        usernameType="text"
                        errors={this.state.errors}
                    />
                )}
            </Mutation>
        );
    }
}

export default Login;
