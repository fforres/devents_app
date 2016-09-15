import React, { Component } from 'react';

import styles from './styles.css';

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.container}>
        <h1> :D </h1>
      </div>
    );
  }
}
