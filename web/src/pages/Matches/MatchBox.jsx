import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from './UserImage';
import UserInfo from './UserInfo';
import './styles.scss';

const MatchBox = ({ firstName, lastName, image, rating }) => (
    <Link to="/TODO" style={{ textDecoration: 'none' }}>
        <div className="matchbox">
            <UserImage image={image} />
            <UserInfo
                firstName={firstName}
                lastName={lastName}
                rating={rating}
            />
        </div>
    </Link>
);

export default MatchBox;
