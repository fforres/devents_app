/*
 *
 * EventArea
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Section } from 'rebass';
import { createStructuredSelector } from 'reselect';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { fetchEventsRequested } from './actions';
import { selectEvents, selectLoading, selectError } from './selectors';

import EventFilter from 'components/EventFilter';
import EventList from 'components/EventList';

export class EventArea extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    return (
      <Section
        p={2}
        backgroundColor={'rgb(229, 229, 229)'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <EventFilter />
        <EventList
          events={this.props.events}
        />
      </Section>
    );
  }
}

EventArea.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.oneOfType([
    ImmutablePropTypes.list,
    PropTypes.array,
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  events: selectEvents(),
  loading: selectLoading(),
  error: selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchEvents: () => dispatch(fetchEventsRequested()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventArea);
