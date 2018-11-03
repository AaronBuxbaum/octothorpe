import React from 'react';
import { compose, graphql } from 'react-apollo';
import { take } from 'lodash';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import SelectedHashtags from './SelectedHashtags';
import { ADD_HASHTAG, GET_HASHTAGS } from './queries';

const MAX_SUGGESTIONS = 5;
const suggestions = [
    '#things',
    '#more things',
    '#scuba diving',
];
const popularitiesMap = {
    '#things': 1,
    '#more things': 3,
    '#scuba diving': 9049,
};

class Hashtags extends React.Component {
    state = {
        suggestions: [],
        popularities: {},
        value: '#',
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
        if (value.length < 1 || value.charAt(0) !== '#')
            return;
        this.updateSuggestions(value);
    }

    updateSuggestions = (value) => {
        const suggestions = this.getSuggestions(this.trim(value));
        const popularities = this.getPopularities(suggestions);
        this.setState({
            suggestions,
            popularities,
            value,
        });
    };

    trim = (value) => {
        const raw = value.substring(1);
        const trimmed = raw.trim();
        return `#${trimmed}`;
    };

    getItemAlreadyExists = (title) => {
        const titleEquals = (selectedItem) => selectedItem.title === title;
        return this.props.data.hashtags.some(titleEquals);
    };

    getItemIsInvalid = (title) => {
        if (title.length < 2) {
            return true;
        }
        if (this.getItemAlreadyExists(title)) {
            return true;
        }
        return false;
    };

    clearValue = () => {
        this.setState({ value: '#' });
    }

    handleSelectItem = (title) => {
        if (this.getItemIsInvalid(title)) {
            return;
        }

        this.clearValue();

        const newItem = {
            popularity: this.state.popularities[title],
            title,
        };
        this.props.addHashtag({ variables: newItem })
    };

    handleSelectSuggestion = ({ suggestion }) => {
        this.handleSelectItem(this.trim(suggestion));
    };

    handleEnterKey = (event) => {
        event.preventDefault();
        this.handleSelectItem(this.trim(this.state.value));
    };

    routeToMatches = () => {
        window.location.assign('/matches');
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
                            suggestions={this.state.suggestions}
                            value={this.state.value}
                        />
                    </FormField>
                </FormFields>
                <SelectedHashtags />

            </Form>
        );
    }
}

const enhance = compose(
    graphql(GET_HASHTAGS),
    graphql(ADD_HASHTAG, {
        name: 'addHashtag',
        options: {
            refetchQueries: () => [{ query: GET_HASHTAGS }],
        },
    }),
);

export default enhance(Hashtags);
