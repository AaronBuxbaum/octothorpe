import React from 'react';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import List from 'grommet/components/List';
import Row from './Row';

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
  graphql(DELETE_HASHTAG, { name: 'deleteHashtag' }),
);

export default enhance(SelectedHashtags);
