import React from 'react';
import { findIndex } from 'lodash';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import List from 'grommet/components/List';
import Row from './Row';
// import Hashtags from '../Hashtags';

const GET_HASHTAGS = gql`
  query {
    hashtags {
        id
        title
        intensity
    }
  }
`;

const DELETE_HASHTAG = gql`
  mutation DeleteHashtag($id: ID!) {
    deleteHashtag(id: $id) {
        id
    }
  }
`;

const SelectedHashtags = ({
  items,
  deleteHashtag,
}) => (
    <List>
      {items.map((item) => (
        <Row
          item={item}
          removeItem={() => deleteHashtag({ variables: { id: item.id } })}
          key={item.id}
        />
      ))}
    </List>
  );

const enhance = compose(
  graphql(DELETE_HASHTAG, {
    name: 'deleteHashtag',
    options: {
      update: (cache, { data }) => {
        const { hashtags } = cache.readQuery({ query: GET_HASHTAGS });
        console.log(data);
        const { id } = data.deleteHashtag;
        console.log({ ...hashtags });
        console.log({ ...data });
        const index = findIndex(hashtags, { id });
        hashtags.splice(index, 1);
        console.log(hashtags);
        cache.writeQuery({
          query: GET_HASHTAGS,
          data: { hashtags }
        });
      },
    },
  }),
);

export default enhance(SelectedHashtags);
