import React from 'react';
import LoginForm from 'grommet/components/LoginForm';
import routeTo from '../../router/routeTo';
import { MATCHES } from '../../router/pages';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const LOG_IN = gql`
  mutation Login($userInfo: UserAuthentication!) {
    login(userInfo: $userInfo) {
      token
    }
  }
`;

class Login extends React.PureComponent {
    state = {
        errors: [],
    };

    handleLoginFailure = (error) => {
        this.setState({
            errors: [error.message],
        });
    }

    clearErrors = () => {
        this.setState({
            errors: [],
        });
    }

    handleLoginSuccess = () => {
        this.clearErrors();
        routeTo(MATCHES);
    }

    render() {
        return (
            <Mutation
                mutation={LOG_IN}
                ignoreResults
                onCompleted={this.handleLoginSuccess}
                onError={this.handleLoginFailure}
            >
                {(onSubmit) => (
                    <LoginForm
                        onSubmit={(userInfo) => onSubmit({ variables: { userInfo } })}
                        usernameType="text"
                        errors={this.state.errors}
                        title="Log In"
                    />
                )}
            </Mutation>
        );
    }
}

export default Login;
