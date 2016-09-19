/**
*
* EventList
*
*/

import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import styles from './styles.css';
import EventCard from 'components/EventCard';

class EventList extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const events = this.props.events.map((el) => (<EventCard {...el} key={el.id} />));
    return (
      <div className={styles.eventList}>
        {events}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.oneOfType([
    ImmutablePropTypes.list,
    PropTypes.array,
  ]).isRequired,
};

export default EventList;
