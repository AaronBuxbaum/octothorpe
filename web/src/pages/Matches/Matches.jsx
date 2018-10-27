import React from 'react';
import { get } from 'lodash';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import MatchBox from './MatchBox';

const MATCHES = gql`
  query {
    matches {
      firstName
      lastName
      rating
      username
    }
  }
`;

const buildMatchBox = ({ firstName, lastName, rating, username }) =>
    <MatchBox
        firstName={firstName}
        lastName={lastName}
        rating={rating}
        key={username}
    />;

const Matches = () => (
    <Query query={MATCHES}>
        {({ data }) => {
            const matches = get(data, 'matches', []);
            return matches.map(buildMatchBox);
        }}
    </Query>
);

export default Matches;
