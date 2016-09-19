/**
*
* EventCard
*
*/

import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import 'moment/min/locales.min';
const a = moment.locale('es');

import styles from './styles.css';
import Icon from 'components/Icon';

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
          <div className={styles.bodyTitle}><span>{this.props.group.name}</span></div>
          <div className={styles.bodySubTitle}>
            <div className={styles.inline}>
              <Icon
                name="calendar"
                className={styles.subTitleIcon}
              />
              <span className={styles.subTitleText}>{moment(this.props.time, 'x').format('DD [de] MMMM [del] YYYY [a las] hh:mm a')}</span>
            </div>
            <div className={styles.inline}>
              <Icon
                name="map-marker"
                className={styles.subTitleIcon}
              />
              <span className={styles.subTitleText}>{this.props.venue && this.props.venue.address ? this.props.venue.address : 'No hay un lugar aún'}</span>
            </div>
          </div>
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
    address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};


export default EventCard;
