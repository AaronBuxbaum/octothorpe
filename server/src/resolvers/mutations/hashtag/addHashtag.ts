import hashtagModel from '../../../models/hashtagModel';

const addHashtag = (root, { name, intensity }) =>
    new hashtagModel({ name, intensity }).save();

export default addHashtag;
