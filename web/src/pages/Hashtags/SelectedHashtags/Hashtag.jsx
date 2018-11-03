import React from 'react';
import './styles.scss';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import CloseButton from './CloseButton';

const postfixes = [
  { B: 1E9 },
  { M: 1E6 },
  { K: 1E3 },
  { '': 1 },
];

const formatPopularity = (num) => {
  for (let i = 0; i < postfixes.length; i++) {
    const postfix = postfixes[i];
    const key = Object.keys(postfix)[0];
    const value = postfix[key];
    if (num >= value) {
      return Math.round(num / value) + key;
    }
  }

  return num;
};

// const infoColumnStyle = {
//   alignItems: 'center',
//   display: 'flex',
// };

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
      <Tile separator='top' align='start' basis='1/4'>
        <Header size='small' pad={{ "horizontal": "small" }}>
          <Heading tag='h4' strong margin='none'>
            {title}
            <CloseButton id={id} />
          </Heading>
        </Header>
      </Tile>
      // <ListItem
      //   justify="between"
      //   separator="horizontal"
      //   onMouseDown={this.handleMouseDown}
      //   onMouseUp={this.handleMouseUp}
      //   onMouseLeave={this.handleMouseLeave}
      // >
      //   <span>
      //     {title}
      //   </span>
      //   <span>
      //     {intensity}
      //   </span>
      //   <span className="secondary" style={infoColumnStyle}>
      //     {formatPopularity(popularity)}
      //     <CloseButton id={id} />
      //   </span>
      // </ListItem>
    );
  }
}

export default Hashtag;
