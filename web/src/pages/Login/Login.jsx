import React from 'react';
import LoginForm from 'grommet/components/LoginForm';
import routeTo from '../../router/routeTo';
import { MATCHES } from '../../router/pages';

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

    onSubmit = (loginInfo) => {
        this.setState({
            isLoading: true,
        });

        // logInToAccount(loginInfo)
        //     .then(this.handleLoginSuccess)
        //     .catch(this.handleLoginFailure)
        //     .finally(() => {
        //         this.setState({
        //             isLoading: false,
        //         });
        //     });
    }

    render() {
        return (<LoginForm
            onSubmit={this.onSubmit}
            errors={this.state.errors}
            title="Log In"
        />);
    }
}

export default Login;
