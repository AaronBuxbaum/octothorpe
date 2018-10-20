import React from 'react';
import LoginForm from 'grommet/components/LoginForm';
import routeTo from '../../router/routeTo';
import { MATCHES } from '../../router/pages';

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

    onSubmit = (loginInfo) => {
        this.setState({
            isLoading: true,
        });

        // registerAccount(loginInfo)
        //     .then(this.handleRegistrationSuccess)
        //     .catch(this.handleRegistrationFailure)
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
            title="Register"
        />);
    }
}

export default Register;
