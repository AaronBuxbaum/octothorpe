import React from 'react';
import { get } from 'lodash';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import MatchBox from './MatchBox';

const MATCHES = gql`
  query {
    matches {
      firstName
      lastName
      image
      rating
      username
    }
  }
`;

const buildMatchBox = ({ firstName, lastName, image, rating, username }) =>
    <MatchBox
        firstName={firstName}
        lastName={lastName}
        rating={rating}
        image={image}
        key={username}
    />;

const Matches = ({ data }) => {
    const matches = get(data, 'matches', []);
    return matches.map(buildMatchBox);
};

const enhance = compose(
    graphql(MATCHES),
);

export default enhance(Matches);
