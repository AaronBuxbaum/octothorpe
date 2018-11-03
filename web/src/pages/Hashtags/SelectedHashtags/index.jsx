import React from 'react';
import { isEmpty } from 'lodash';
import { branch, renderNothing } from 'recompose';
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
      {data.hashtags.map(buildHashtags)}
    </Tiles>
  );

const hasNoHashtags = ({ data }) => isEmpty(data.hashtags);

const enhance = compose(
  graphql(GET_HASHTAGS),
  branch(hasNoHashtags, renderNothing),
);

export default enhance(SelectedHashtags);
