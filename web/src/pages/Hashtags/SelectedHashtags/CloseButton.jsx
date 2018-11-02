import React from 'react';
import Close from 'grommet/components/icons/base/Close';
import { compose, graphql } from 'react-apollo';
import { GET_HASHTAGS, DELETE_HASHTAG } from '../queries';

const CloseButton = ({
  id,
  deleteHashtag,
}) => (
    <Close
      colorIndex="error"
      onClick={() => deleteHashtag({ variables: { id } })}
      size="xsmall"
      style={{ marginLeft: '8px', cursor: 'pointer' }}
    />
  );

const enhance = compose(
  graphql(DELETE_HASHTAG, {
    name: 'deleteHashtag',
    options: {
      refetchQueries: () => [{ query: GET_HASHTAGS }],
    },
  }),
);

export default enhance(CloseButton);
