import React from 'react';
import { compose, graphql } from 'react-apollo';
import List from 'grommet/components/List';
import Row from './Row';
import { GET_HASHTAGS } from '../queries';

const buildRow = (item) => (
  <Row
    item={item}
    key={item.id}
  />
);

const SelectedHashtags = ({
  data,
}) => (
    <List>
      {data.hashtags && data.hashtags.map(buildRow)}
    </List>
  );

const enhance = compose(
  graphql(GET_HASHTAGS),
);

export default enhance(SelectedHashtags);
