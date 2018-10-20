import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';

class Home extends Component {
  // example request to Flask
  componentDidMount() {
    fetch('http://localhost:5000').then((response) => {
      response.json().then(console.log);
    }).catch((e) => console.error(e));
  }

  render() {
    return (
      <Heading>
        Sample Heading
      </Heading>
    );
  }
}

export default Home;
