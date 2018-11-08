import userModel from '../../../models/userModel';

const updateProfile = async (root, { userInfo, image }, context) => {
    const { user } = context;
    const img = await image;
    console.log(img);
    return userModel.findByIdAndUpdate(user, userInfo, { new: true });
}

export default updateProfile;
