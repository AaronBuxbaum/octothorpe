import hashtagModel from '../../../models/hashtagModel';

const deleteHashtag = (root, { id }) =>
    hashtagModel.findOneAndRemove({ id });

export default deleteHashtag;
