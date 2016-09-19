/**
*
* Icon
*
*/

import React, { PropTypes } from 'react';
import 'font-awesome/css/font-awesome.css';

import styles from './styles.css';

class Icon extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const styleClass = [styles.icon, 'fa', 'fa-fw', `fa-${this.props.name}`];
    if (Object.prototype.toString.call(this.props.className).toLowerCase() === '[object array]') {
      this.props.className.forEach((el) => {
        styleClass.push(el);
      });
    } else if (typeof this.props.className === 'string') {
      styleClass.push(this.props.className);
    }
    return (
      <i className={styleClass.join(' ')} />
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default Icon;
