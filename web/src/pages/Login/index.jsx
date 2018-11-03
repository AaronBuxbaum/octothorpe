import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import LoginForm from 'grommet/components/LoginForm';
import { REGISTER, MATCHES } from '../../router/pages';
import { Mutation } from 'react-apollo';
import { saveToken } from '../../storage/localStorage';
import { LOG_IN, SIGN_UP } from './queries';

class Login extends React.Component {
    state = {
        errors: [],
    };

    handleFailure = (error) =>
        this.setState({
            errors: [error.message],
        });

    clearErrors = () =>
        this.setState({
            errors: [],
        });

    routeToNextPage = () =>
        this.props.history.push(MATCHES.path);

    handleSuccess = (response) => {
        const key = Object.keys(response)[0];
        const token = response[key].token;
        this.clearErrors();
        saveToken(token);
        this.routeToNextPage();
    }

    isRegistrationPage = () =>
        this.props.location.pathname === REGISTER.path;

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

const enhance = compose(
    withRouter,
);

export default enhance(Login);
