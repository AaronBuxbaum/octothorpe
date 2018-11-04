import React from 'react';
import { branch, renderNothing } from 'recompose';
import { compose, graphql } from 'react-apollo';
import { GET_PROFILE, UPDATE_PROFILE } from './queries.jsx';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import DateTime from 'grommet/components/DateTime';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

class Profile extends React.Component {
    state = {
        birthdate: '',
        errors: [],
    };

    handleUpdateFailure = (error) =>
        this.setState({
            errors: [error.message],
        });

    clearErrors = () =>
        this.setState({
            errors: [],
        });

    handleUpdateSuccess = () =>
        this.clearErrors();

    onSubmit = async (event) => {
        event.preventDefault();
        // const { birthdate } = this.state;
        const variables = {
            userInfo: {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                // profileImage: event.target.photoURL.value,
            }
        };
        this.props.updateProfile({ variables });
    }

    updateFirstName = (input) =>
        this.setState({
            firstName: input,
        });

    updateBirthdate = (input) =>
        this.setState({
            birthdate: input,
        });

    render() {
        const { firstName, lastName } = this.props.data.user;
        return (
            <Form onSubmit={this.onSubmit}>
                <FormFields>
                    <FormField label="First Name">
                        <TextInput
                            name="firstName"
                            defaultValue={firstName}
                        />
                    </FormField>
                    <FormField label="Last Name">
                        <TextInput
                            name="lastName"
                            defaultValue={lastName}
                        />
                    </FormField>
                    {/* <FormField label="Photo URL">
                        <TextInput
                            name="photoURL"
                            type="url"
                            placeHolder={this.props.photoURL}
                        />
                    </FormField>
                    <FormField label="Birth Date">
                        <DateTime
                            name="birthdate"
                            format="M/D/YYYY"
                            placeholder={this.props.birthdate}
                            onChange={this.updateBirthdate}
                            value={this.state.birthdate}
                        />
                    </FormField> */}
                </FormFields>
                <Footer pad={{ "vertical": "medium" }}>
                    <Button
                        label='Submit'
                        type='submit'
                        primary={true}
                    />
                </Footer>
            </Form>
        );
    }
}

const isLoading = ({ data }) => data.loading;

const enhance = compose(
    graphql(GET_PROFILE),
    branch(isLoading, renderNothing),
    graphql(UPDATE_PROFILE, { name: 'updateProfile' }),
);

export default enhance(Profile);
