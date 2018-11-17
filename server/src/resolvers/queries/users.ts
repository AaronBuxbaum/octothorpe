import userModel from "../../models/userModel";

const users = () => {
    return userModel.find({});
}

export default users;
