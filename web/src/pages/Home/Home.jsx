import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Heading from 'grommet/components/Heading';
import client from 'state/client';

const query = gql`
  query {
    test
  }
`;

class Home extends Component {
  // example request to Flask
  componentDidMount() {
    global.fetch('http://localhost:5000').then((response) => {
      response.json().then(console.log); // eslint-disable-line no-console
    }).catch(e => console.error(e));

    // example request to Node
    client.query({ query })
      .then((response) => {
        console.log(response.data);
      }).catch(e => console.error(e));
  }

  render() {
    return (
      <Query query={query}>
        {({ data }) => console.log(data) || ( // eslint-disable-line no-console
          <Heading>
            Sample Heading
          </Heading>
        )}
      </Query>
    );
  }
}

export default Home;
