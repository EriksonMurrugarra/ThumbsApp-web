import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import TestItem from './test-item';

class TestList extends Component {

  render () {
    return (
      <Card.Group centered>
        <TestItem title="Examen de Historia" description="Primer Semestre con la profesora Lusy " />
        <TestItem title="Examen de Geografia" description="Primer Semestre con la profesora Lusy" />
        <TestItem title="Practica de Quimica" description="Primer Semestre con la profesora Lusy" />
      </Card.Group>
    )
  }

}

export default TestList;