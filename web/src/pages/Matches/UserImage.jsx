import React from 'react';
import './UserImage.scss';

const UserImage = ({ image }) => (
    <img
        src={image}
        alt="profile"
        className="profile-image"
    />
);

export default UserImage;
