/**
*
* EventArea
*
*/

import React from 'react';
import { Section } from 'rebass';

import EventFilter from 'components/EventFilter';
import EventList from 'components/EventList';
// import styles from './styles.css';

class EventArea extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section
        p={2}
        backgroundColor={'rgb(229, 229, 229)'}
      >
        <EventFilter />
        <EventList
          events={[{
            name: 'test1', date: new Date(),
          }, {
            name: 'test2', date: new Date(),
          }, {
            name: 'test3', date: new Date(),
          }]}
        />

      </Section>
    );
  }
}

export default EventArea;
