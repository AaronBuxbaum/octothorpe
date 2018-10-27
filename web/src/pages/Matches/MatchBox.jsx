import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from './UserImage';
import UserInfo from './UserInfo';
import './MatchBox.scss';

const MatchBox = ({ firstName, lastName, rating }) => (
    <Link to="/TODO" style={{ textDecoration: 'none' }}>
        <div className="matchbox">
            <UserImage />
            <UserInfo
                firstName={firstName}
                lastName={lastName}
                rating={rating}
            />
        </div>
    </Link>
);

export default MatchBox;
