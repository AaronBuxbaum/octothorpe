import hashtagModel from '../../../models/hashtagModel';

const addHashtag = (root, { title }) => {
    // hashtagModel.collection.drop();
    return new hashtagModel({ title }).save();
}

export default addHashtag;
