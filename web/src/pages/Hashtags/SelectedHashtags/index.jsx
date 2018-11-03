import React from 'react';
import { compose, graphql } from 'react-apollo';
import Tiles from 'grommet/components/Tiles';
import Hashtag from './Hashtag';
import { GET_HASHTAGS } from '../queries';

const buildHashtags = (item) => (
  <Hashtag
    item={item}
    key={item.id}
  />
);

const SelectedHashtags = ({
  data,
}) => (
    <Tiles>
      {data.hashtags && data.hashtags.map(buildHashtags)}
    </Tiles>
  );

const enhance = compose(
  graphql(GET_HASHTAGS),
);

export default enhance(SelectedHashtags);
