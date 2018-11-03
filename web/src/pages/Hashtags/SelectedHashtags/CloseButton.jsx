import React from 'react';
import './styles.scss';
import { mapProps } from 'recompose';
import Close from 'grommet/components/icons/base/Close';
import { compose, graphql } from 'react-apollo';
import { GET_HASHTAGS, DELETE_HASHTAG } from '../queries';

const CloseButton = ({
  deleteHashtag,
}) => (
    <Close
      colorIndex="error"
      onClick={deleteHashtag}
      size="xsmall"
      className="close-button"
    />
  );

const enhance = compose(
  graphql(DELETE_HASHTAG, {
    name: 'deleteHashtag',
    options: {
      refetchQueries: () => [{ query: GET_HASHTAGS }],
    },
  }),
  mapProps(({ id, deleteHashtag }) => ({
    deleteHashtag: () => deleteHashtag({ variables: { id } }),
  }))
);

export default enhance(CloseButton);
