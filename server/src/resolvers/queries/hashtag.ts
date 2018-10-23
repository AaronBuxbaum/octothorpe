import hashtagModel from '../../models/hashtagModel';

const hashtag = (root, { id }) =>
    hashtagModel.findOne({ id });

export default hashtag;
