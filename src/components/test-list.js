import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TestList = ({ tests }) => {
  return (
    <div>
      {
        tests.map(test => {
          return (
            <Header as='h3' key={test.id}>
              <Icon name='book'/>
              <Header.Content>
                <Link to="/prueba/examen_de_historia">{test.title}</Link>
              </Header.Content>
            </Header>
          )
        })
      }
    </div>
  );
}

export default TestList;