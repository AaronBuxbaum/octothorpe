import React from 'react';
import { compose, mapProps } from 'recompose';
import round from 'lodash';
import './styles.scss';

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
                {rating}
            </div>
        </div>
    );

const formatRating = (rating) => `${round(rating * 100)}% match`;

const enhance = compose(
    mapProps((props) => ({ ...props, rating: formatRating(props.rating) })),
);

export default enhance(UserInfo);
