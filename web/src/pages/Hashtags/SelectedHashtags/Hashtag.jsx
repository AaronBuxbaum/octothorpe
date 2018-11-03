import React from 'react';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import CloseButton from './CloseButton';

const Hashtag = ({ item }) => (
  <Tile align='start' basis='1/4'>
    <Header size='small' pad={{ "horizontal": "small" }}>
      <Heading tag='h4' strong margin='none'>
        {item.title}
      </Heading>
      <CloseButton id={item.id} />
    </Header>
  </Tile>
);

export default Hashtag;
