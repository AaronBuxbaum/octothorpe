import userModel from "../../models/userModel";

const user = (root, args, context) => {
    const { userId } = context;
    if (!userId)
        return null;
    return userModel.findById(userId);
}

export default user;
