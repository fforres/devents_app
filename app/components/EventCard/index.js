/**
*
* EventCard
*
*/

import React, { Component, PropTypes } from 'react';
import { Button, ButtonOutline } from 'rebass';

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
  checkAddress() {
    if (this.props.venue && this.props.venue.address) {
      if (this.props.venue.lat && this.props.venue.lon) {
        return (
          <a
            target="_blank"
            href={`http://maps.google.com/maps?t=m&q=loc:${this.props.venue.lat}+${this.props.venue.lon}`}
            className={styles.subTitleText}
          >{this.props.venue.city} - {this.props.venue.address}</a>
        );
      }
      return (<span className={styles.subTitleText}>{this.props.venue.city} {this.props.venue.address}</span>);
    }
    return (<span className={styles.subTitleText}>No hay un lugar aún</span>);
  }
  checkEventLink() {
    if (this.props.link) {
      return (
        <a
          target="_blank"
          href={this.props.link}
          className={styles.subTitleText}
        >{this.props.name}</a>
      );
    }
    return (<span className={styles.subTitleText}>{this.props.name}</span>);
  }
  checkFee() {
    if (this.props.fee) {
      return (
        <div className={styles.bodyFooterText}>
          <Icon name="money" />
          <span>{this.props.fee}</span>
        </div>
      );
    }
    return (
      <div className={styles.bodyFooterText}>
        <Icon name="money" />
        <span>Gratis</span>
      </div>
    );
  }
  checkAssistants() {
    return (
      <div className={styles.bodyFooterText}>
        <Icon name="users" />
        <span>
          {`${this.props.assistants_current} ${this.props.group.assistants_nickname}`}
        </span>
      </div>
    );
  }
  render() {
    const imageStyle = {
      backgroundImage: this.checkImage(),
    };
    const address = this.checkAddress();
    const event = this.checkEventLink();
    const fee = this.checkFee();
    const assistants = this.checkAssistants();
    return (
      <div className={styles.eventCard}>
        <div
          className={styles.header}
          style={imageStyle}
        />
        <div className={styles.body}>
          <div className={styles.bodyTitle}>
            <span>{this.props.group.name}</span>
          </div>
          <div className={styles.bodySubTitle}>
            <div className={styles.bodySubTitleContent}>
              <div className={styles.inline}>
                <Icon
                  name="ticket"
                  className={styles.subTitleIcon}
                />
                { event }
              </div>
              <div className={styles.inline}>
                <Icon
                  name="calendar"
                  className={styles.subTitleIcon}
                />
                <span className={styles.subTitleText}>
                  {moment(this.props.time, 'x').format('DD [de] MMM [del] YYYY [a las] hh:mm a')}
                </span>
              </div>
              <div className={styles.inline}>
                <Icon
                  name="map-marker"
                  className={styles.subTitleIcon}
                />
                { address }
              </div>
            </div>
            <div className={styles.as}>
              Agregar a: <br />
              <div className={styles.buttonArea}>
                <ButtonOutline
                  color="primary"
                  rounded
                >
                  <Icon name="google" />
                  Gmail
                </ButtonOutline>
                <ButtonOutline
                  color="primary"
                  rounded
                >
                  <Icon name="apple" />
                  iCal
                </ButtonOutline>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.bodyFooter}>
          { assistants }
          { fee }
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
  utc_offset: PropTypes.string,
  fee: PropTypes.string,
  link: PropTypes.string,
  group: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hires_photo: PropTypes.string,
    photo: PropTypes.string,
    assistants_nickname: PropTypes.string.isRequired,
  }).isRequired,
  venue: PropTypes.shape({
    city: PropTypes.string.isRequired,
    lat: PropTypes.string.isRequired,
    lon: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};


export default EventCard;
