import userModel from "../../models/userModel";

const user = (root, args, context) => {
    const { user } = context;
    if (!user) return null;
    return userModel.findById(user);
}

export default user;
