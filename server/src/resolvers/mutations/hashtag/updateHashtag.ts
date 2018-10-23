import hashtagModel from '../../../models/hashtagModel';

const updateHashtag = (root, { id, intensity }) =>
    hashtagModel.findOneAndUpdate({ id }, { intensity });

export default updateHashtag;
