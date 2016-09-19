/**
*
* EventCard
*
*/

import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

class EventCard extends Component { // eslint-disable-line react/prefer-stateless-function
  checkImage() {
    if (this.props.group.photo) {
      return `url(${this.props.group.photo})`;
    }
    return 'url(https://dummyimage.com/600x300/c8317d/ffffff?text=sorry+:/+no+image+yet)';
  }
  render() {
    const imageStyle = {
      backgroundImage: this.checkImage(),
    };
    return (
      <div className={styles.eventCard}>
        <div
          className={styles.header}
          style={imageStyle}
        />
        <div className={styles.body}>
          <div className={styles.bodyTitle}>{this.props.group.name}</div>
        </div>
      </div>
    );
  }
}
//
EventCard.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  assistants_limit: PropTypes.number,
  assistants_current: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  plain_text_description: PropTypes.string.isRequired,
  utc_offset: PropTypes.string,
  fee: PropTypes.string,
  link: PropTypes.string,
  group: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hires_photo: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  venue: PropTypes.shape({
    city: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};


export default EventCard;
