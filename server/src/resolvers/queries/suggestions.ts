import { sortedIndex } from 'lodash';
import hashtagModel from '../../models/hashtagModel';

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
    const returnValue = suggestionNames.slice(index, index + 5);
    if (returnValue[0] !== title) {
        returnValue.unshift(title);
        returnValue.pop();
    }
    return returnValue;
};

export default suggestions;
