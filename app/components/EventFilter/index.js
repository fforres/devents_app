/**
*
* EventFilter
*
*/

import React from 'react';
import { Heading, Icon } from 'rebass';

import styles from './styles.css';

class EventFilter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.eventFilter}>
        <div>
          <Icon
            fill="currentColor"
            height="1em"
            name="heart"
            width="1em"
          />
          <Heading
            level={1}
            size={3}
          >
            <span>
            DEV-entos
            </span>
          </Heading>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default EventFilter;
