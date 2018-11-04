import hashtagModel from '../../models/hashtagModel';

const hashtags = (root, args, context) => {
    const { user } = context;
    return hashtagModel.find({ user });
};

export default hashtags;
