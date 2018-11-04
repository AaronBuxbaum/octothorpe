import React from 'react';
import { compose, graphql } from 'react-apollo';
import { take } from 'lodash';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import SelectedHashtags from './SelectedHashtags';
import { ADD_HASHTAG, GET_HASHTAGS, GET_SUGGESTIONS } from './queries';

const MAX_SUGGESTIONS = 5;
const suggestions = [
    'things',
    'more things',
    'scuba diving',
];
const popularitiesMap = {
    'things': 1,
    'more things': 3,
    'scuba diving': 9049,
};

class Hashtags extends React.Component {
    state = {
        value: '',
    };

    trim = (input) =>
        input.replace(/\W/g, '');

    handleUpdate = (event) => {
        const { value } = event.target;
        this.updateSuggestions(this.trim(value));
    }

    updateSuggestions = (value) => {
        this.props.getSuggestions.refetch({ title: value });
        this.setState({
            value,
        });
    };

    getItemAlreadyExists = (title) => {
        const titleEquals = (selectedItem) => selectedItem.title === title;
        return this.props.data.hashtags.some(titleEquals);
    };

    getItemIsInvalid = (title) => {
        if (title.length < 1) {
            return true;
        }
        if (this.getItemAlreadyExists(title)) {
            return true;
        }
        return false;
    };

    clearValue = () => {
        this.setState({ value: '' });
    }

    handleSelectItem = (value) => {
        const title = this.trim(value);

        if (this.getItemIsInvalid(title)) {
            return;
        }

        this.clearValue();

        const newItem = {
            popularity: 1,
            title,
        };
        this.props.addHashtag({ variables: newItem })
    };

    handleSelectSuggestion = ({ suggestion }) => {
        this.handleSelectItem(suggestion);
    };

    handleEnterKey = (event) => {
        event.preventDefault();
        this.handleSelectItem(this.state.value);
    };

    render() {
        return (
            <Form onSubmit={this.handleEnterKey}>
                <FormFields>
                    <FormField>
                        <TextInput
                            placeHolder="Type the things you like..."
                            onDOMChange={this.handleUpdate}
                            onSelect={this.handleSelectSuggestion}
                            suggestions={this.props.getSuggestions.suggestions}
                            value={this.state.value}
                        />
                    </FormField>
                </FormFields>
                <SelectedHashtags />
            </Form >
        );
    }
}

const enhance = compose(
    graphql(GET_HASHTAGS),
    graphql(GET_SUGGESTIONS, {
        name: 'getSuggestions',
    }),
    graphql(ADD_HASHTAG, {
        name: 'addHashtag',
        options: {
            refetchQueries: () => [{ query: GET_HASHTAGS }],
        },
    }),
);

export default enhance(Hashtags);
