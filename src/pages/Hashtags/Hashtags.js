import React from 'react';
import { compose } from 'recompose';
import { take } from 'lodash';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Layer from 'grommet/components/Layer';
import Spinning from 'grommet/components/icons/Spinning';
import SelectedHashtags from './SelectedHashtags';
import { firestoreConnect, withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';

const MAX_SUGGESTIONS = 5;
const suggestions = [
    'things',
    'more things',
    'scuba diving',
];
const popularities = {
    'things': 1,
    'more things': 3,
    'scuba diving': 9049,
};
const postfixes = [
    { 'B': 1E9 },
    { 'M': 1E6 },
    { 'K': 1E3 },
    { '': 1 }
];

class Hashtags extends React.Component {
    state = {
        isWorking: false,
        selected: [],
        suggestions: [],
        value: '',
    };

    formatPopularity = (num) => {
        for (let i = 0; i < postfixes.length; i++) {
            const postfix = postfixes[i];
            const key = Object.keys(postfix)[0];
            const value = postfix[key];
            if (num >= value) {
                return Math.round(num / value) + key;
            }
        }

        return num;
    };

    getPopularity = (suggestion) => {
        const popularity = popularities[suggestion] || 1;
        return this.formatPopularity(popularity);
    };

    getSuggestions = (input) => {
        const startsWithInput = (suggestion) => suggestion.startsWith(input);
        const relevantSuggestions = suggestions.filter(startsWithInput);
        if (relevantSuggestions[0] !== input)
            relevantSuggestions.unshift(input);
        return take(relevantSuggestions, MAX_SUGGESTIONS);
    };

    updateSuggestions = (event) => {
        const value = event.target.value;
        const suggestions = this.getSuggestions(value.trim());
        this.setState({
            suggestions,
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

        const popularity = this.getPopularity(title);
        const newSelectedItem = {
            popularity,
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

    setLoading = (status) => {
        this.setState({
            isWorking: status,
        });
    };

    routeToMatches = () => {
        window.location.assign('/matches');
    };

    submitHashtags = () => {
        this.setLoading(true);

        const db = this.props.firestore;
        const uid = this.props.uid;

        db.collection('hashtags')
            .where('uid', '==', uid)
            .get()
            .then((snapshot) => {
                const batch = db.batch();
                snapshot.forEach(({ ref }) => batch.delete(ref));
                return batch.commit();
            })
            .then(() =>
                this.state.selected.forEach(({ title }) => {
                    return db.add(
                        { collection: 'hashtags' },
                        { value: title, uid },
                    );
                })
            )
            .finally(() => this.setLoading(false))
    };

    render() {
        return (
            <>
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

                        <SelectedHashtags
                            items={this.state.selected}
                            removeItem={this.removeSelectedItem}
                        />
                    </FormFields>

                    <Footer pad={{ "vertical": "medium" }}>
                        <Button
                            label='Submit'
                            onClick={this.submitHashtags}
                        />
                    </Footer>
                </Form>

                <Layer hidden={!this.state.isWorking}>
                    <Spinning size="xlarge" />
                    Working...
                </Layer>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    uid: state.firebase.auth.uid,
    hashtags: state.firestore.data.hashtags,
});

export default compose(
    withFirestore,
    connect(mapStateToProps),
    firestoreConnect((props) => [
        {
            collection: 'hashtags',
            where: [
                ['uid', '==', props.uid || 0]
            ],
            storeAs: 'hashtags'
        }
    ]),
)(Hashtags);
