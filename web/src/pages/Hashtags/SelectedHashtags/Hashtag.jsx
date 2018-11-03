import React from 'react';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import CloseButton from './CloseButton';

const START_THRESHOLD = 500;

class Hashtag extends React.Component {
  handleMouseDown = () => {
    this.startTime = Date.now();
  };

  handleMouseUp = () => {
    if (this.startTime) {
      const holdTime = Date.now() - this.startTime;
      if (holdTime > START_THRESHOLD) {
        console.log(holdTime);
      }
    }
    this.resetIntensity();
  };

  handleMouseLeave = () => {
    this.resetIntensity();
  };

  resetIntensity = () => {
    delete this.startTime;
  };

  render() {
    const { id, title } = this.props.item;

    return (
      <Tile align='start' basis='1/4'>
        <Header size='small' pad={{ "horizontal": "small" }}>
          <Heading tag='h4' strong margin='none'>
            {title}
          </Heading>
          <CloseButton id={id} />
        </Header>
      </Tile>
    );
  }
}

export default Hashtag;
