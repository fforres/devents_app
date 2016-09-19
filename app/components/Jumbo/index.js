import React, { Component } from 'react';
import { Banner, Heading } from 'rebass';

// import styles from './styles.css';
import image from './images/santiago1.jpg';

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Banner
        align="center"
        style={{ minHeight: '19em', margin: 0, padding: '3em', backgroundAttachment: 'fixed' }}
        backgroundImage={image}
      >
        <Heading
          level={1}
          size={0}
        >
          DEV-entos
        </Heading>
        <Heading
          level={3}
          size={3}
        >
          Encuentra eventos para desarrolladores cerca de ti :)
        </Heading>
      </Banner>
    );
  }
}
