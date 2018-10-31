import React from 'react';
import { compose, graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import { take } from 'lodash';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import SelectedHashtags from './SelectedHashtags';

const UPDATE_HASHTAGS = gql`
  mutation UpdateHashtags($title: String!) {
    addHashtag(title: $title, intensity: 1) {
        id
    }
  }
`;

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
        isWorking: false,
        selected: [],
        suggestions: [],
        popularities: {},
        value: '',
    };

    // componentDidMount() {
    // const selected = this.props[hashtags].map((hashtag) => ({
    //     title: hashtag.value,
    //     popularity: 1,
    // }));
    // this.setState({
    //     selected,
    // });
    // };

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
            if (this.state.popularities[item]) {
                return;
            }

            newPopularities[item] = popularitiesMap[item] || 1;
        });

        return { ...this.state.popularities, ...newPopularities };
    };

    updateSuggestions = (event) => {
        const value = event.target.value;
        const suggestions = this.getSuggestions(value.trim());
        const popularities = this.getPopularities(suggestions);
        this.setState({
            suggestions,
            popularities,
            value,
        });
    };

    getItemAlreadyExists = (title) => {
        const titleEquals = (selected) => selected.title === title;
        return this.state.selected.some(titleEquals);
    };

    getItemIsInvalid = (title) => {
        if (!title) {
            return true;
        }
        if (this.getItemAlreadyExists(title)) {
            return true;
        }
        return false;
    };

    handleSelectItem = (title) => {
        if (this.getItemIsInvalid(title)) {
            return;
        }

        const newSelectedItem = {
            popularity: this.state.popularities[title],
            title,
        };

        this.setState(({ selected }) => ({
            selected: selected.concat(newSelectedItem),
            value: '',
        }));
    };

    handleSelectSuggestion = ({ suggestion }) => {
        this.handleSelectItem(suggestion.trim());
    };

    handleEnterKey = (event) => {
        event.preventDefault();
        this.handleSelectItem(this.state.value.trim());
    };

    removeSelectedItem = (index) => {
        this.setState(({ selected }) => {
            selected.splice(index, 1);
            return { selected };
        });
    };

    routeToMatches = () => {
        window.location.assign('/matches');
    };

    render() {
        const { updateHashtags } = this.props;
        return (
            <Form onSubmit={this.handleEnterKey}>
                <FormFields>
                    <FormField>
                        <TextInput
                            placeHolder="Type the things you like..."
                            onDOMChange={this.updateSuggestions}
                            onSelect={this.handleSelectSuggestion}
                            suggestions={this.state.suggestions}
                            value={this.state.value}
                        />
                    </FormField>

                    <SelectedHashtags />
                </FormFields>

                <Footer pad={{ "vertical": "medium" }}>
                    <Button
                        label='Submit'
                        onClick={() => updateHashtags({ variables: { title: 'dddd' } })}
                    />
                </Footer>
            </Form>
        );
    }
}

const enhance = compose(
    graphql(UPDATE_HASHTAGS, {
        name: 'updateHashtags',
    }),
);

export default enhance(Hashtags);