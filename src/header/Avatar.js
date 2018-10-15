import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { PROFILE } from '../router/pages';
import { pageRoutes } from '../router/routeTo';
import { connect } from 'react-redux';

const Avatar = ({ imageUrl }) => (
    <Link to={pageRoutes[PROFILE]}>
        <img
            src={imageUrl}
            alt="Avatar"
            className="avatar"
        />
    </Link>
);

const mapStateToProps = (state) => ({
    imageUrl: state.firebase.profile.photoURL || 'http://placekitten.com/150/150',
});

export default connect(mapStateToProps)(Avatar);
