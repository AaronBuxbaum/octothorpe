import hashtagModel from '../../../models/hashtagModel';

const addHashtag = (root, { title }, context) => {
    const { user } = context;
    return new hashtagModel({ title, user }).save();
}

export default addHashtag;
