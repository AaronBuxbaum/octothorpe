import React from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import DateTime from 'grommet/components/DateTime';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';

class Profile extends React.PureComponent {
    state = {
        birthdate: '',
        errors: [],
    };

    handleUpdateFailure = (error) => {
        this.setState({
            errors: [error.message],
        });
    }

    clearErrors = () => {
        this.setState({
            errors: [],
        });
    }

    handleUpdateSuccess = () => {
        this.clearErrors();
    }

    onSubmit = (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const { birthdate } = this.state;
        this.props.firebase.updateProfile({ displayName, photoURL, birthdate })
            .then(this.handleUpdateSuccess)
            .catch(this.handleUpdateFailure)
            .finally(() => {
                this.setState({
                    isLoading: false,
                });
            });
    }

    updateBirthdate = (input) => {
        this.setState({
            birthdate: input,
        });
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormFields>
                    <FormField label="Full Name">
                        <TextInput
                            name="name"
                            placeHolder={this.props.displayName}
                        />
                    </FormField>
                    <FormField label="Photo URL">
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
                    </FormField>
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

const mapStateToProps = (state) => ({
    displayName: state.firebase.profile.displayName,
    photoURL: state.firebase.profile.photoURL,
});

export default withFirestore(connect(mapStateToProps)(Profile));
