const user = (root, args, context) => {
    // console.log(context);
    if (!context.user) return null;
    return {
        username: 'aaron',
        profileImage: 'http://placekitten.com/g/200/200',
    };
}

export default user;
