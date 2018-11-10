import userModel from '../../../models/userModel';

const updateProfile = async (root, { userInfo }, context) => {
    const { user } = context;
    return userModel.findByIdAndUpdate(user, userInfo, { new: true });
}

export default updateProfile;
