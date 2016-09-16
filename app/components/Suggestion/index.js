/**
*
* Suggestion
*
*/

import React from 'react';
import { Button, Section } from 'rebass';

import styles from './styles.css';
console.log(styles.suggestion);
class Suggestion extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section
        p={3}
      >
        <p>
          Contenido curado, con eventos y actividades en todo Chile
          <br />
          Gratis, por Developers, para Developers!
        </p>
        <p>¿Tienes una sugerencia?</p>
        <Button
          backgroundColor="primary"
          color="white"
          inverted
          rounded
        >
          Sugiere un evento
        </Button>

      </Section>
    );
  }
}

export default Suggestion;
