import React from 'react';
import LoginForm from 'grommet/components/LoginForm';
import routeTo from '../../router/routeTo';
import { MATCHES } from '../../router/pages';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const UserInfo = {
    username: String,
    password: String,
};

const SIGN_UP = gql`
  mutation Signup($userInfo: UserInfo) {
    signup(info: $userInfo) {
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

    // onSubmit = (loginInfo) => {
    //     this.setState({
    //         isLoading: true,
    //     });

    //     logInToAccount(loginInfo)
    //         .then(this.handleLoginSuccess)
    //         .catch(this.handleLoginFailure)
    //         .finally(() => {
    //             this.setState({
    //                 isLoading: false,
    //             });
    //         });
    // }

    render() {
        return (
            <Mutation mutation={SIGN_UP} ignoreResults>
                {(onSubmit) => (
                    <LoginForm
                        onSubmit={onSubmit}
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
