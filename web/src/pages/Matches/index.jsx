import React from 'react';
import { branch, renderNothing } from 'recompose';
import { isEmpty } from 'lodash';
import { compose, graphql } from 'react-apollo';
import MatchBox from './MatchBox';
import { MATCHES } from './queries';

const buildMatchBox = ({
    firstName,
    lastName,
    image,
    rating,
    username,
}) => (
        <MatchBox
            firstName={firstName}
            lastName={lastName}
            rating={rating}
            image={image}
            key={username}
        />
    );

const Matches = ({ data }) => data.matches.map(buildMatchBox);

const hasNoMatches = ({ data }) => isEmpty(data.matches);

const enhance = compose(
    graphql(MATCHES),
    branch(hasNoMatches, renderNothing),
);

export default enhance(Matches);
