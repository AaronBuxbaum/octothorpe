import React from 'react';
import round from 'lodash';
import './UserInfo.scss';

const formatRating = (rating) => `${round(rating * 100)}% match`;

const UserInfo = ({
    firstName,
    lastName,
    rating,
}) => (
        <div className="user-info">
            <div className="name">
                {firstName} {lastName}
            </div>
            <div className="rating">
                {formatRating(rating)}
            </div>
        </div>
    );

export default UserInfo;
