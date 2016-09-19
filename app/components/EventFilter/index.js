/**
*
* EventFilter
*
*/

import React from 'react';
import { Heading, Input, Select } from 'rebass';
import Icon from 'components/Icon';

import styles from './styles.css';

class EventFilter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.eventFilter}>
        <div className={styles.leftSide}>
          <Heading
            level={1}
            size={3}
            style={{ marginRight: '1em' }}
          >
            <Icon
              name="calendar"
              className={styles.facebookIcon}
            />
            <span>
            Próximos Eventos
            </span>
          </Heading>
          <Select
            className={styles.filter}
            label="Ordenar"
            name="order"
            onChange={(e, data) => {
              console.log(e);
              console.log(data);
              console.log(this);
            }}
            options={[{
              children: 'Fecha',
              value: 'date',
            }]}
            hideLabel
            type="select"
          />
        </div>
        <div>
          <Input
            label="Buscar"
            name="search"
            placeholder="Filtrar"
            rounded
            autoOff
            onChange={(e, data) => {
              console.log(e);
              console.log(data);
              console.log(this);
            }}
            hideLabel
            type="text"
          />
        </div>
      </div>
    );
  }
}

export default EventFilter;
