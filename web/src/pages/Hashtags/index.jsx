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
        suggestions: [],
        popularities: {},
        value: '',
    };

    getSuggestions = (input) => {
        const startsWithInput = (suggestion) => suggestion.startsWith(input);
        let relevantSuggestions = suggestions.filter(startsWithInput);
        if (relevantSuggestions[0] !== input)
            relevantSuggestions.unshift(input);
        return take(relevantSuggestions, MAX_SUGGESTIONS);
    };

    getPopularities = (items) => {
        const newPopularities = {};

        items.forEach((item) => {
            if (!this.state.popularities[item]) {
                newPopularities[item] = popularitiesMap[item] || 1;
            }
        });

        return { ...this.state.popularities, ...newPopularities };
    };

    handleUpdate = (event) => {
        const { value } = event.target;
        this.updateSuggestions(value.trim());
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

    handleSelectItem = (title) => {
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
        this.handleSelectItem(suggestion.trim());
    };

    handleEnterKey = (event) => {
        event.preventDefault();
        this.handleSelectItem(this.state.value.trim());
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
