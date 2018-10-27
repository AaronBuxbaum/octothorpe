import React from 'react';
import { random } from 'lodash';
import './UserImage.scss';

const UserImage = () => (
    <img
        src={`http://placekitten.com/g/${random(150, 400)}/${random(150, 400)}`}
        alt="profile"
        className="profile-image"
    />
);

export default UserImage;
