import { sortedIndex } from 'lodash';
import hashtagModel from '../../models/hashtagModel';

const MAX_SUGGESTIONS = 5;

// this is just a really dumb autocomplete solution for now
let suggestionNames = [];
(async () => {
    const allSuggestions = await hashtagModel.aggregate([
        { $group: { _id: '$title', count: { $sum: 1 } } },
    ]);
    suggestionNames = allSuggestions.map(({ _id }) => _id).sort();
})();

const suggestions = (root, { title }) => {
    const index = sortedIndex(suggestionNames, title);
    const returnValue = suggestionNames.slice(index, index + MAX_SUGGESTIONS);
    if (returnValue[0] !== title) {
        returnValue.unshift(title);
        returnValue.pop();
    }
    return returnValue;
};

export default suggestions;
