import hashtagModel from '../../../models/hashtagModel';

const addHashtag = (root, { title, intensity }) => {
    hashtagModel.collection.drop();
    return new hashtagModel({ title, intensity }).save();
}

export default addHashtag;
