import hashtagModel from '../../../models/hashtagModel';

const deleteHashtag = (root, { id }) =>
    hashtagModel.findOneAndRemove({ _id: id });

export default deleteHashtag;
